import React from 'react'
import "./style.scss"
import { data } from './data'
import { Card, Divider } from '@mui/material'
import { useTheme } from "@mui/material/styles"
import { useMediaQuery } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import classNames from 'classnames';
import '@fortawesome/fontawesome-free/css/all.min.css';

const DetailCourse = () => {

    const theme = useTheme();
    const isTabnet = useMediaQuery(theme.breakpoints.between(770, 1200));
    const isMobile = useMediaQuery(theme.breakpoints.down(770));


    return (
        <div className='detail-course'>
            <h6 className='name-course'> Khóa học phổ biến</h6>
            <div className={classNames("course-popular", isTabnet ? "course-popular-tabnet" : "", isMobile ? "course-popular-mobile" : "")}>
                {
                    data.slice(0, 4).map((item, index) => {
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
                <h6>Khóa học tham khảo</h6>
                <div className={classNames("course-reference", isTabnet ? "course-reference-tabnet" : "", isMobile ? "course-reference-mobile" : "")}>
                    {
                        data.slice(0, 4).map((item, index) => {
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
                                            <div>
                                                <i className="far fa-clock iconOclock" style={{ color: "#f5c002", marginRight: "8px" }} /> 8 giờ
                                            </div>
                                            <div>
                                                <i className="far fa-calendar-alt iconCalendar" style={{ color: "#f06f68", marginRight: "8px" }} />
                                                4 tuần
                                            </div>
                                            <div>
                                                <i className="fas fa-signal iconLevel" style={{ color: "#65c9ff", marginRight: "8px" }} />
                                                Tất cả
                                            </div>
                                        </div>
                                    </div>
                                    <Divider style={{ marginTop: "24px" }} />
                                    <div className='card-footer'>
                                        <div className='card-footer-left'>
                                            <div className='img'>
                                                <img src="https://demo2.cybersoft.edu.vn/static/media/avatar2.bb9626e2.png" />
                                                <span style={{ marginLeft: '8px' }}>  Elon Musk</span>
                                            </div>
                                        </div>
                                        <div className='card-footer-right'>
                                            <p> 800.000<sup>đ</sup></p>
                                            <p> 400.000<sup>đ</sup></p>
                                        </div>

                                    </div>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
            {/* course yeu thich */}
            <div className="all-course">
                <h6> Khóa học Front End React Js</h6>
                <div className={classNames("course-reference", isTabnet ? "course-reference-tabnet" : "", isMobile ? "course-reference-mobile" : "")}>
                    {
                        data.slice(0, 4).map((item, index) => {
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
                                            <div>
                                                <i className="far fa-clock iconOclock" style={{ color: "#f5c002", marginRight: "8px" }} /> 8 giờ
                                            </div>
                                            <div>
                                                <i className="far fa-calendar-alt iconCalendar" style={{ color: "#f06f68", marginRight: "8px" }} />
                                                4 tuần
                                            </div>
                                            <div>
                                                <i className="fas fa-signal iconLevel" style={{ color: "#65c9ff", marginRight: "8px" }} />
                                                Tất cả
                                            </div>
                                        </div>
                                    </div>
                                    <Divider style={{ marginTop: "24px" }} />
                                    <div className='card-footer'>
                                        <div className='card-footer-left'>
                                            <div className='img'>
                                                <img src="https://demo2.cybersoft.edu.vn/static/media/avatar2.bb9626e2.png" />
                                                <span style={{ marginLeft: '8px' }}>  Elon Musk</span>
                                            </div>
                                        </div>
                                        <div className='card-footer-right'>
                                            <p> 800.000<sup>đ</sup></p>
                                            <p> 400.000<sup>đ</sup></p>
                                        </div>

                                    </div>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>


        </div>
    )
}

export default DetailCourse