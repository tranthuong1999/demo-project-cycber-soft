import React, { useEffect } from 'react';
import './style.scss';
import CourseCommonPage from '../CourseCommon';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchCourseByCategory } from '../../redux/slices/category.slice';
import { useLocation } from 'react-router-dom';
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from '@mui/material';
import classNames from 'classnames';

const CourseByCategoryPage = () => {

    const dispatch = useAppDispatch();
    const { listCourseByCategory } = useAppSelector((state) => state.categoryReducer)
    const location: any = useLocation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(600));
    const isTabnet = useMediaQuery(theme.breakpoints.between(600, 900));

    useEffect(() => {
        dispatch(fetchCourseByCategory(location.state.maDanhMuc))
    }, [location.state.maDanhMuc])

    return (
        <div className='course-by-category-page'>
            <div className='block-1'>
                <h3> KHÓA HỌC THEO DANH MỤC</h3>
                <p className='choose-course'> HÃY CHỌN KHÓA HỌC MONG MUỐN !!!</p>
            </div>

            <p className='name-category'>
                <span><i className='fas fa-desktop' /></span> {location.state.tenDanhMuc}
            </p>
            <div className={classNames("list-course-by-category", isMobile ? "list-course-by-category-mobile" : "", isTabnet ? "list-course-by-category-tabnet" : "")}>
                {
                    listCourseByCategory.map((item: any) => {
                        return (
                            <CourseCommonPage
                                image={item.hinhAnh}
                                title={item.biDanh}
                                header="Lập trình hiện đang là xu hướng trên toàn thế giới"
                                titleLike='Yêu thích'
                                course_id={item.maKhoaHoc}
                            />
                        )
                    })
                }
            </div>
        </div>

    )
}

export default CourseByCategoryPage