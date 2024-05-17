import React from 'react'
import "./style.scss"
import { useTheme } from "@mui/material/styles"
import { useMediaQuery } from '@mui/material';
import classNames from 'classnames';
import CountUp from 'react-countup';

const data = [
    { img: "http://demo2.cybersoft.edu.vn/static/media/003-students.e1a7c67b.png", number: 9000, title: " Học viên" },
    { img: "http://demo2.cybersoft.edu.vn/static/media/001-timetable.0e009173.png", number: 1000, title: "Khoá học" },
    { img: "http://demo2.cybersoft.edu.vn/static/media/002-hourglass.548810be.png", number: 33200, title: "Giờ học" },
    { img: "http://demo2.cybersoft.edu.vn/static/media/004-teacher.5bbd6eec.png", number: 400, title: "Giảng viên" },
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