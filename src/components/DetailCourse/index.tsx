import React, { useEffect } from 'react'
import "./style.scss"
import { Card, Divider } from '@mui/material'
import { useTheme } from "@mui/material/styles"
import { useMediaQuery } from '@mui/material';
import classNames from 'classnames';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CourseCommonPage from '../CourseCommon'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { useSelector } from 'react-redux'
import { fetchListAllCategory } from '../../redux/slices/category.slice'
import { data } from './data';

const DetailCourse = () => {

    const theme = useTheme();
    const isTabnet = useMediaQuery(theme.breakpoints.between(770, 1200));
    const isMobile = useMediaQuery(theme.breakpoints.down(770));
    const dispatch = useAppDispatch();
    const { listAllCourse } = useAppSelector((state) => state.categoryReducer)

    useEffect(() => {
       dispatch(fetchListAllCategory())
    }, [])



    return (
        <div className='detail-course'>
            <h6 className='name-course'> Khóa học phổ biến</h6>
            <div className={classNames("course-popular", isTabnet ? "course-popular-tabnet" : "", isMobile ? "course-popular-mobile" : "")}>
                {
                    data.slice(0,5).map((item:any, index) => {
                        return (
                            <Card className='card-global'>
                                <div className='card-img'>
                                    <img src={item.hinhAnh} />
                                </div>
                                <div className='name'>
                                    <span className='sticker-card'>{item.tenKhoaHoc} </span>
                                </div>
                                <div className='card-body'>
                                    <h6> Lập trình hiện đang là xu hướng trên toàn thế giới...</h6>
                                    <div className='title-maker'>
                                        <div className='image-ellon-mask'>
                                            <img src="https://demo2.cybersoft.edu.vn/static/media/avatar2.bb9626e2.png" />
                                        </div>
                                        <div className='name-author'> Elon Musk</div>
                                    </div>
                                </div>
                                <Divider style={{ marginTop: "24px" }} />
                                <div className='card-footer'>
                                    <div className='card-footer-left'>
                                        <p className='real-count'> 800.000<sup>đ</sup></p>
                                        <p className='dist-count'> 400.000<sup>đ</sup></p>
                                    </div>
                                    <div className='card-footer-right'>
                                        <span className='text-star'><i className='fas fa-star mr-1 textStar' />4.9</span>
                                        <span className='color-card-title'>(7840)</span>
                                    </div>

                                </div>
                            </Card>
                        )
                    })
                }
            </div>

            {/* course tham khao */}
            <div className="all-course">
                <h6 style={{ marginBottom:"20px"}}>Khóa học tham khảo</h6>
                <div className={classNames("course-reference", isTabnet ? "course-reference-tabnet" : "", isMobile ? "course-reference-mobile" : "")}>
                    {
                        listAllCourse.slice(11, 16).map((item: any, index: any) => {
                            return (
                                <CourseCommonPage
                                    image={item.hinhAnh}
                                    title={item.biDanh}
                                    header="Lập trình hiện đang là xu hướng trên toàn thế giới"
                                    titleLike='Yêu thích'
                                />
                            )
                        })
                    }
                </div>
            </div>
            {/* course yeu thich */}
            <div className="all-course">
                <h6 style={{ marginBottom:"20px"}}> Khóa học Front End React Js</h6>
                <div className={classNames("course-reference", isTabnet ? "course-reference-tabnet" : "", isMobile ? "course-reference-mobile" : "")}>
                    {
                        listAllCourse.slice(6, 11).map((item: any, index: any) => {
                            return (
                                <CourseCommonPage
                                    image={item.hinhAnh}
                                    title={item.biDanh}
                                    header="Lập trình hiện đang là xu hướng trên toàn thế giới"
                                    titleLike='Yêu thích'
                                />
                            )
                        })
                    }
                </div>
            </div>


        </div>
    )
}

export default DetailCourse