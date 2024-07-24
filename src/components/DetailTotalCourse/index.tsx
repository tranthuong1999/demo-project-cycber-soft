import React, { useEffect } from 'react';
import "./style.scss";
import classNames from 'classnames';
import { useTheme } from "@mui/material/styles";
import { Pagination, useMediaQuery } from "@mui/material";
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchListCourse } from '../../redux/slices/category.slice';

const data = [
    { title: "CHƯƠNG TRÌNH HỌC", amount: 300, icon: "fas fa-laptop" },
    { title: "NHÀ SÁNG TẠO", amount: 10000, icon: "fas fa-camera" },
    { title: "NHÀ THIẾT KẾ", amount: 400, icon: "fas fa-briefcase" },
    { title: "BÀI GIẢNG", amount: 3000, icon: "fas fa-book" },
    { title: "VIDEO", amount: 40000, icon: "fas fa-play-circle" },
    { title: "CHƯƠNG TRÌNH HỌC", amount: 200, icon: "fas fa-dice-d20" },
]


const DetailTotalCourse = () => {
    const theme = useTheme();
    const isTabnetSmall = useMediaQuery(theme.breakpoints.between(600, 930));
    const isMobile = useMediaQuery(theme.breakpoints.down(600));
    const isTabnet = useMediaQuery(theme.breakpoints.between(930, 1200));

    const dispatch = useAppDispatch();
    const { listCourse } = useAppSelector((state) => state.categoryReducer);

    useEffect(() => {
        dispatch(fetchListCourse({ page: 1, pageSize: 12, MaNhom: "GP01" }))
    }, [])


    return (
        <div className='detail-total-course'>
            <div className='course-top'>
                <h3>KHÓA HỌC</h3>
                <p> BẮT ĐẦU HÀNH TRÌNH NÀO!!!</p>
            </div>
            <div className={classNames("course-center", isMobile ? "course-center-mobile" : "", isTabnet ? "course-center-tabnet" : "")}>
                {
                    data.map((item, index: number) => {
                        return (
                            <div className={classNames('item-course', `item-course-${index + 1}`)}>
                                <h5>{item.title}</h5>
                                <i className={item.icon} style={{ fontSize: "30px" }} />
                                <p> {item.amount}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className='course-bottom'>
                <h6 className='title'><span><i className='fas fa-bookmark' /></span>Danh sách khóa học</h6>
                <div className={classNames("list-course", isMobile ? "list-course-mobile" : "", isTabnet ? "list-course-tabnet" : "", isTabnetSmall ? "list-course-tabnet-small" : "")}>
                    {
                        listCourse?.items?.map((item: any) => {
                            return (
                                <div className={classNames("course-total")}>
                                    <div className='image-course'>
                                        <img src={item.hinhAnh} />
                                    </div>
                                    <p className='biDanh'> {item.biDanh}</p>
                                    <h6 className="total-course-title">Lập trình hiện nay đang là xu hướng trên toàn thế giới.....</h6>
                                    <p className='author'>
                                        <img src="https://demo2.cybersoft.edu.vn/static/media/avatar2.bb9626e2.png" style={{ width: 35, height: 35 }} />
                                        <span>Elon Musk</span>
                                    </p>
                                    <div className='course-money'>
                                        <div className='block-1'>
                                            <p className='real-sale'> 800.000<sup>đ</sup></p>
                                            <p className='discount-sale'> 400.000<sup>đ</sup></p>
                                        </div>
                                        <p className='block-2'><span className='star'> <i className='fas fa-star' /></span> <span className='count'>4.9</span><span className='review'>(7840)</span></p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <div className='course-pagination'>
                <Pagination
                    count={listCourse.totalPages}
                    color="primary"
                    onChange={(e: any, page) => {
                        console.log("page change", page)
                        dispatch(fetchListCourse({ page: page }))
                    }}
                />
            </div>
        </div>
    )
}

export default DetailTotalCourse