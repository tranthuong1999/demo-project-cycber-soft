
import React, { useEffect, useState } from 'react';
import "./style.scss";
import classNames from 'classnames';
import intructor_1 from "../../assets/instructor/intructor_1.jpg"
import intructor_2 from "../../assets/instructor/intructor_2.jpg"
import intructor_3 from "../../assets/instructor/intructor_3.jpg"
import intructor_4 from "../../assets/instructor/intructor_4.jpg"
import intructor_5 from "../../assets/instructor/intructor_5.jpg"
import intructor_6 from "../../assets/instructor/intructor_6.jpg"
import intructor_7 from "../../assets/instructor/intructor_7.jpg"
import { useTheme } from "@mui/material/styles"
import { useMediaQuery } from '@mui/material';

const data = [
    { name: "Big DadMoon", title: "Chuyên gia lĩnh vực", img: intructor_1, expert: "lập trình" },
    { name: "IcarDi MenBor", title: "Chuyên gia ngôn ngữ", img: intructor_2, expert: "Vue Js" },
    { name: "Bladin Slaham", title: "Chuyên gia hệ thống", img: intructor_3, expert: "máy tính" },
    { name: "Chris Andersan", title: "Chuyên gia lĩnh vực", img: intructor_4, expert: "Full Skill" },
    { name: "VueLo Gadi", title: "Chuyên gia lĩnh vực", img: intructor_5, expert: "Phân tích" },
    { name: "Hoàng Nam", title: "Chuyên gia lĩnh vực", img: intructor_6, expert: "PHP" },
    { name: "David Ngô Savani", title: "Chuyên gia lĩnh vực", img: intructor_7, expert: "Front End" },
]

const Intructors = () => {

    const [isLeftDotActive, setIsLeftDotActive] = useState(false);
    const [isRightDotActive, setIsRightDotActive] = useState(true);
    const [listData, setListData] = useState(data.slice(0, 6))
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down(767));
    const isTabnet = useMediaQuery(theme.breakpoints.between(767, 1024));


    useEffect(() => {
        if (isLeftDotActive) {
            setListData(data.slice(1, 7));
            return;
        }
        if (isRightDotActive) {
            setListData(data.slice(0, 6));
            return;
        }
    }, [isLeftDotActive, isRightDotActive])

    return (
        <div className='instructor'>
            <h6 className='intructor-top'> Giảng viên hàng đầu</h6>
            <div
                className={classNames("row-intructor", isLeftDotActive ? "row-intructor-left" : "")}
            >
                {
                    listData.map((item, index) => {
                        return (
                            <div
                                className='member-intructor'
                                key={index}
                            >
                                <div className='instructor-content'>
                                    <img src={item.img} />
                                    <h6> {item.name}</h6>
                                    <div className='text-review-role'>
                                        <p>{item.title} </p>
                                        <p>{item.expert} </p>
                                    </div>
                                    <p className='review-mentor'>
                                        {[1, 2, 3, 4].map((item) => {
                                            return (
                                                <i className='fas fa-star' style={{ color: "#f6ba35" }} />
                                            )
                                        })}
                                        <span className='text-start' style={{ color: "#f6ba35" }}>4.9</span>
                                    </p>
                                    <span className='review-text'>100 đánh giá</span>
                                </div>

                            </div>
                        )
                    })
                }
            </div>

            <div className="slider-dot">
                <div className={classNames("dot-left", isLeftDotActive ? "dot-left-active" : "")} onClick={() => { setIsLeftDotActive(true); setIsRightDotActive(false); }}> </div>
                <div className={classNames("dot-right", isRightDotActive ? "dot-right-active" : "")} onClick={() => { setIsRightDotActive(true); setIsLeftDotActive(false); }}></div>
            </div>

            <div className='review'>
                <div className='review-student'>
                    <div className='triangle-top-right'></div>
                    <div className='small-box small-box-left-top'></div>
                    <div className='small-box small-box-right-bottom'></div>
                    <div className='small-box small-box-right-top'></div>
                    <div className='small-box small-box-left-bottom'></div>

                    <div className={classNames("row", isMobile ? "row-mobile" : "")}>
                        <div className='row-left'>
                            <div className={classNames("review-img", isMobile ? "review-img-mobile" : "")}>
                                <div className='bg-student-review'></div>
                                <img src="https://demo2.cybersoft.edu.vn/static/media/avatarReview.2f5a1f3c.png" />

                            </div>
                        </div>
                        <div className='row-right'>
                            <blockquote className="text-qoute">
                                <q>
                                    Chương trình giảng dạy được biên soạn dành riêng cho các bạn Lập trình từ trái ngành hoặc đã có kiến thức theo cường độ cao, luôn được tinh chỉnh và tối ưu hóa theo thời gian bởi các thành viên sáng lập và giảng viên dày kinh nghiệm.Thực sự rất hay và hấp dẫn
                                </q>
                            </blockquote>
                            <p>
                                Nhi Dev
                            </p>
                            <span> Học viên xuất sắc</span>
                        </div>
                    </div>

                </div>

            </div>

        </div >
    )
}

export default Intructors