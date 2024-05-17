import React from 'react'
import "./style.scss"
import { useTheme } from "@mui/material/styles"
import { useMediaQuery } from '@mui/material';
import classNames from 'classnames';
import CountUp from 'react-countup';
import member_1 from "../../assets/member/member_1.png"
import member_2 from "../../assets/member/member_2.png"
import member_3 from "../../assets/member/member_3.png"
import member_4 from "../../assets/member/member_4.png"


const data = [
    { img: member_1, number: 9000, title: " Học viên" },
    { img: member_2, number: 1000, title: "Khoá học" },
    { img: member_3, number: 33200, title: "Giờ học" },
    { img: member_4, number: 400, title: "Giảng viên" },
]

const Member = () => {

    const theme = useTheme();
    const isTabnet = useMediaQuery(theme.breakpoints.between(767, 992));
    const isMobile = useMediaQuery(theme.breakpoints.down(767));

    return (
        <div className='member'>
            <div className={classNames("row", isTabnet ? "row-tabnet" : "", isMobile ? "row-mobile" : "")}>
                {
                    data.map((item, index) => {
                        return (
                            <div className='item-member' key={index}>
                                <div className="member-img">
                                    <img src={item.img} />
                                </div>
                                <div className='text-number'>
                                    <CountUp end={item.number} duration={8} />
                                </div>
                                <div className="member-title">
                                    {item.title}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Member