import React, { useEffect, useState } from 'react';
import "./style.scss"
import { Rating } from '@mui/material';
import classNames from 'classnames';
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from '@mui/material';
import { data_lesson, data_couse_1, data_couse_2, data_couse_3 } from "./data";
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchDetailCourse, fetchListAllCategory } from '../../redux/slices/category.slice';
import CourseCommonPage from '../CourseCommon';
import { useLocation, useNavigate } from 'react-router-dom';
import { apiRegisterCourse } from '../../apis/category.api';
import BasicModal from '../Modal';
import PermDeviceInformationIcon from '@mui/icons-material/PermDeviceInformation';


export const DetailCourseChildPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(600));
    const isTabnet = useMediaQuery(theme.breakpoints.between(600, 900));
    const dispatch = useAppDispatch()
    const { listAllCourse, detailCourse } = useAppSelector((state) => state.categoryReducer)
    const userInfor: any = JSON.parse(localStorage.getItem("credential")!)
    const navigate = useNavigate();
    const [isModalRegisterCourse, setIsModalRegisterCourse] = useState(false);

    const { state } = useLocation();
    useEffect(() => {
        dispatch(fetchListAllCategory());
    }, [])

    useEffect(() => {
        dispatch(fetchDetailCourse(state?.maKhoaHoc))
    }, [state])

    const handleRegisterCourse = async () => {
        if (!userInfor) {
            navigate("/login")
            return;
        }
        apiRegisterCourse(state?.maKhoaHoc, userInfor?.taiKhoan)
            .then((result) => setIsModalRegisterCourse(true))
            .catch((error) => {
                console.log("error", error)
            })
    }
    const renderContent = () => {
        return (
            <div style={{ display: 'flex', flexDirection: "column", gap: "10px", alignItems: 'center', justifyContent: 'center' }}>
                <div data-aos="flip-left"><PermDeviceInformationIcon sx={{ width: 80, height: 80 , color:"green" }} /> </div>
                <h1 style={{ color: "#41b294" }}> Đăng kí thành công</h1>
            </div>
        )
    }

    return (
        <div className='detail-course-child-page'>
            <div className='block-1'>
                <h3>THÔNG TIN KHÓA HỌC</h3>
                <p> TIẾN LÊN VÀ KHÔNG CHẦN CHỪ !!!</p>
            </div>

            <div className={classNames("block-2", isMobile ? "block-2-mobile" : "", isTabnet ? "block-2-tabnet" : "")}>
                <div className='block-2-child-1'>
                    <p className='name'>{detailCourse?.tenKhoaHoc}</p>
                    <div className={classNames("overview", (isTabnet || isMobile) ? "overview-small" : "")}>
                        <div className='overview-1'>
                            <div className='img-logo'>
                                <img
                                    src="https://demo2.cybersoft.edu.vn/static/media/instrutor5.2e4bd1e6.jpg"
                                />
                            </div>
                            <div>
                                <p className="name-1">Giảng viên</p>
                                <p className="name-2">Robert Ngô Ngọc</p>
                            </div>
                        </div>
                        <div className='overview-1'>
                            <div className='img-logo'>
                                <i className='fas fa-graduation-cap' />
                            </div>
                            <div>
                                <p className="name-1">Lĩnh vực</p>
                                <p className="name-2">Lập trình Backend</p>
                            </div>
                        </div>
                        <div className='overview-1'>
                            <div>
                                <p className='over-view-last'><span><Rating precision={0.5} readOnly value={3.5} /></span>3.5</p>
                                <p className="name-1 rating">100 đánh giá</p>
                            </div>
                        </div>
                    </div>
                    <p className='desc'> React.js là thư viện JavaScript phổ biến nhất mà bạn có thể sử dụng và tìm hiểu ngày nay để xây dựng giao diện người dùng hiện đại, phản ứng cho web.
                        Khóa học này dạy bạn về React chuyên sâu, từ cơ bản, từng bước đi sâu vào tất cả các kiến ​​thức cơ bản cốt lõi, khám phá rất nhiều ví dụ và cũng giới thiệu cho bạn các khái niệm nâng cao.Bạn sẽ nhận được tất cả lý thuyết, hàng tấn ví dụ và bản trình diễn, bài tập và bài tập cũng như vô số kiến ​​thức quan trọng bị hầu hết các nguồn khác bỏ qua - sau cùng, có một lý do tại sao khóa học này lại rất lớn! Và trong trường hợp bạn thậm chí không biết tại sao bạn lại muốn học React và bạn chỉ ở đây vì một số quảng cáo hoặc "thuật toán" - đừng lo lắng: ReactJS là một công nghệ quan trọng với tư cách là một nhà phát triển web và trong khóa học này, tôi sẽ cũng giải thích TẠI SAO điều đó lại quan trọng!
                    </p>

                    <h5 className='title-less'>Những gì bạn sẽ học</h5>
                    <div className='list-lesson'>
                        {
                            data_lesson.map((item) => {
                                return (
                                    <div className='item-course'>
                                        <span> <i className='fas fa-check' /></span>{item.title}
                                    </div>
                                )
                            })
                        }
                    </div>

                    <h5 className='content-less'>Nội dung khóa học</h5>

                    <div className='course-detail-item'>
                        <div className="introduce">
                            MỤC 1: GIỚI THIỆU <span><button> Xem trước</button></span>
                        </div>
                        <p className='lesson'> Bài học</p>
                        <div className='list-lesson'>
                            {
                                data_couse_1.map((item) => {
                                    return (
                                        <div className='item-lesson'>
                                            <p><span> <i className='fas fa-play-circle' /></span> {item}</p>
                                            <p><span> <i className='fas fa-clock' /></span>  14:35</p>
                                        </div>
                                    )
                                })

                            }
                        </div>
                    </div>

                    <div className='course-detail-item'>
                        <div className="introduce">
                            MỤC 2: KIẾN THỨC CĂN BẢN <span><button> Xem trước</button></span>
                        </div>
                        <p className='lesson'> Bài học</p>
                        <div className='list-lesson'>
                            {
                                data_couse_2.map((item) => {
                                    return (
                                        <div className='item-lesson'>
                                            <p><span> <i className='fas fa-play-circle' /></span> {item}</p>
                                            <p><span> <i className='fas fa-clock' /></span>  14:35</p>
                                        </div>
                                    )
                                })

                            }
                        </div>
                    </div>

                    <div className='course-detail-item'>
                        <div className="introduce">
                            MỤC 3: KIẾN THỨC CHUYÊN SÂU <span><button> Xem trước</button></span>
                        </div>
                        <p className='lesson'> Bài học</p>
                        <div className='list-lesson'>
                            {
                                data_couse_3.map((item) => {
                                    return (
                                        <div className='item-lesson'>
                                            <p><span> <i className='fas fa-play-circle' /></span> {item}</p>
                                            <p><span> <i className='fas fa-clock' /></span>  14:35</p>
                                        </div>
                                    )
                                })

                            }
                        </div>
                    </div>
                </div>

                <div className='block-2-child-2'>
                    <div className='img-logo'>
                        <img src={detailCourse?.hinhAnh} />
                    </div>
                    <p className='price'><i className='fas fa-bolt' />500.000<sup>đ</sup></p>
                    <div className='button'>
                        <button
                            className='btn-register'
                            onClick={() => handleRegisterCourse()}
                        >
                            Đăng ký
                        </button>
                    </div>
                    <div className='detail'>
                        <p>Ghi danh: <span>10 học viên </span> </p>
                        <i className="fas fa-user-graduate" />
                    </div>
                    <div className='detail'>
                        <p>Thời gian: <span>18 giờ </span> </p>
                        <i className="far fa-clock far fa-calendar-alt" />
                    </div>
                    <div className='detail'>
                        <p>Bài học: <span>10</span> </p>
                        <i className="fas fa-book" />
                    </div>
                    <div className='detail'>
                        <p>Video: <span>14 </span> </p>
                        <i className="fas fa-photo-video" />
                    </div>
                    <div className='detail'>
                        <p>Trình độ: <span> Người mới bắt đầu</span> </p>
                        <i className="fas fa-database" />
                    </div>
                    <div className='input-code'>
                        <input type="text" placeholder='Nhập mã' />
                    </div>
                </div>

            </div>

            <div className='block-3'>
                <h5> Khoá học tham khảo</h5>
                <div className={classNames("list-course-reference", isMobile ? "list-course-reference-mobile" : "", isTabnet ? "list-course-reference-tabnet" : "")}>
                    {
                        listAllCourse.slice(0, 5).map((item: any) => {
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
            {
                isModalRegisterCourse &&
                <BasicModal
                    open={isModalRegisterCourse}
                    onClose={() => setIsModalRegisterCourse(false)}
                    content={renderContent()}
                />
            }
        </div>
    )
}
