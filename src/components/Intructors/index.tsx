
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

        </div >
    )
}

export default Intructors