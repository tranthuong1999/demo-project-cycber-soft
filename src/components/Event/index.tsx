import React from 'react';
import "./style.scss";
import classNames from 'classnames';
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from '@mui/material';
import course_1 from "../../assets/course_1.png"
import img_meta from "../../assets/image-meta.jpg"
import img_google from "../../assets/img-google.jpg"
import img_micro from "../../assets/image-micro.jpg"
import img_amazon from "../../assets/iamge-amazon.jpg"
import creative_1 from "../../assets/crea_1.jpg"
import creative_2 from "../../assets/creative_1.jpg"
import creative_3 from "../../assets/crea_3.jpg"
import creative_4 from "../../assets/crea_4.jpg"
import creative_5 from "../../assets/crea_5.jpg"
import creative_6 from "../../assets/crea_6.jpg"
import creative_7 from "../../assets/crea_7.jpg"
import creative_8 from "../../assets/crea_8.jpg"






const dataSponsor = [
    { image: img_meta, title: "FACEBOOK" },
    { image: img_micro, title: "MICROSOFT" },
    { image: img_google, title: "GOOGLE" },
    { image: img_amazon, title: "AMAZON" },
]
const dataCreattive = [
    { image: creative_1, name: "NGUYỄN NHẬT" },
    { image: creative_2, name: "NGUYỄN NHẬT NAM" },
    { image: creative_3, name: "NGUYỄN NAM" },
    { image: creative_4, name: "JHONNY ĐẶNG" },
    { image: creative_5, name: "NGÔ HENRY" },
    { image: creative_6, name: "VƯƠNG PHẠM VN" },
    { image: creative_7, name: "ROBER IMACU" },
    { image: creative_8, name: "KHOA PUG" },

]

const EventPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(600));
    const isTabnet = useMediaQuery(theme.breakpoints.between(600, 900));


    return (
        <div className="event-page">
            <div className="child-block-1">
                <div className='image-block-1'>
                    <img src="https://demo2.cybersoft.edu.vn/static/media/backroundTech.a989a5f8.jpg" />
                </div>
                <div className={classNames("image-block-2", isMobile ? "image-block-2-mobile" : "")}>
                    <img src="https://demo2.cybersoft.edu.vn/static/media/high-techbrain.2f38d2ab.png" />
                </div>
                <div className='infor-event'>
                    <div className='list-time'>
                        {["NGÀY", "GIỜ", "PHÚT", "GIÂY"].map((item, index) => {
                            return (
                                <div className={classNames("item-time", `item-time-${index + 1}`)}>
                                    <p className='time'> 00</p>
                                    <p className='day'> {item}</p>
                                </div>
                            )
                        })}
                    </div>
                    <h6 className='title-evn'> SỰ KIỆN CÔNG NGHỆ LỚN NHẤT 2021</h6>
                    <p className='date-evn'> 20 - 25 THÁNG 12, 2022, VIỆT NAM</p>
                </div>
            </div>

            {/* <div className="child-block-2"> */}
            <div className={classNames("child-block-2", isMobile ? "child-block-2-mobile" : "")}>
                <div className='img-detail'>
                    <img src={course_1} />
                </div>
                <div className='desc-event'>
                    <h5>SỰ KIỆN CÔNG NGHỆ DÀNH CHO STARTUP</h5>
                    <p className='meeting'> Nơi gặp gỡ của những tư tưởng lớn</p>
                    <p className='card-text'>Innovatube Frontier Summit (IFS) là sự kiện đầu tiên tại Việt Nam tập trung vào cả bốn mảng tiêu biểu của công nghệ tiên phong, bao gồm Artificial Intelligence (trí tuệ nhân tạo), Internet of Things (Internet vạn vật), Blockchain (Chuỗi khối) và Augmented reality/Virtual Reality (Thực tế tăng cường/Thực tế ảo) </p>
                    <div>
                        <button className='btn btn-join'>Tham gia</button>
                        <button className='btn btn-more'>Tìm hiểu thêm</button>
                    </div>
                </div>
            </div>

            <div className="child-block-3">

                <h3 className='name-creative'>CÁC NHÀ ĐỒNG SÁNG TẠO</h3>

                <div className={classNames("list-creative",isMobile ? "list-creative-mobile" : "", isTabnet? "list-creative-tabnet" :"")}>
                        {
                            dataCreattive.map((item) => {
                                return (
                                    <div className='item-creative'>
                                        <div className='img-logo'>
                                            <img src={item.image} />
                                        </div>
                                        <p className='name' style={{ marginTop: "5px" }}> {item.name}</p>
                                        <p className='name'> CEO TECHVIET PRODUCTION</p>

                                    </div>
                                )
                            })
                        }
                    </div>

                </div>

                <div className={classNames("child-block-4")}>
                    <h2 className='name-sponsor'> NHÀ TÀI TRỢ CHƯƠNG TRÌNH</h2>
                    <div className={classNames("list-sponsor", isMobile ? "list-sponsor-mobile" : "", isTabnet ? "list-sponsor-tabnet" : "")}>
                        {
                            dataSponsor.map((item) => {
                                return (
                                    <div className='item-sponsor'>
                                        <div className='img-logo'>
                                            <img src={item.image} />
                                        </div>
                                        <p className='title'> {item.title}</p>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
            )
}

            export default EventPage