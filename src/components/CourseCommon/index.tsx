import React from 'react'
import "./style.scss"
import { Tooltip } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import classNames from 'classnames';

const CourseCommonPage = (props: { image?: string, title?: string, header?: string, titleLike?: string }) => {

    const { image, title, header, titleLike } = props;

    const renderTitle = () => {
        return (
            <div className='tooltip-course'>
                <p className='header-tool'><img src="https://demo2.cybersoft.edu.vn/static/media/emoji.6d1b7051.png" style={{ width: 40, height: 40 }} />Elun Musk Recard</p>
                <h6 className='desc-tool'>Bootcamp - Lập trình full stack từ zero đến có việc</h6>
                <p className='detail-tool'>
                    Đã có hơn 6200 bạn đăng kí học và có việc làm thông qua chương trình đào tạo Bootcamp Lập trình Front End chuyên nghiệp.
                    Khóa học 100% thực hành cường độ cao theo dự án thực tế và kết nối doanh nghiệp hỗ trợ tìm việc ngay sau khi học...
                </p>
                <div className='detail-time'>
                    <p className='hour'><span><i className='far fa-clock iconOclock' /></span>8 giờ</p>
                    <p className='week'><span><i className='far fa-calendar-alt iconCalenda' /></span>4 tuần</p>
                    <p className='all'><span><i className='fas fa-signal iconLevel' /></span>Tất cả</p>
                </div>
                <div className='btn'>
                    <button className='btn-detail'> Xem chi tiết</button>
                </div>
            </div>
        )
    }

    return (
        <Tooltip
            classes={{ tooltip: 'custom-tooltip', arrow: 'custom-arrow' }}
            title={renderTitle()}
            placement='right-start'
        >
            <div className='course-common'>
                <div className='course-image'>
                    <img src={image} />
                </div>
                {titleLike && <p className='liker'>{titleLike}</p>}
                <p className='title'>{title}</p>
                <p className='header'> {header}</p>
                <div className={classNames("icon-show-tooltip")}>
                    <ArrowForwardIosIcon sx={{ color: "grey" }} />
                </div>
                <div className='detail-time'>
                    <p className='hour'><span><i className='far fa-clock iconOclock' /></span>8 giờ</p>
                    <p className='week'><span><i className='far fa-calendar-alt iconCalenda' /></span>4 tuần</p>
                    <p className='all'><span><i className='fas fa-signal iconLevel' /></span>Tất cả</p>
                </div>
                <div className='footer-course'>
                    <div className='name'>
                        <img src="https://demo2.cybersoft.edu.vn/static/media/avatar2.bb9626e2.png" style={{ width: 35, height: 35 }} />
                        Elon Musk
                    </div>
                    <div className='money'>
                        <p className='real-count'> 800.000<sup>đ</sup></p>
                        <p className='dist-count'> 400.000<sup>đ</sup><span><i className='fas fa-tag iconTag' /></span></p>
                    </div>
                </div>
            </div>
        </Tooltip>
    )
}

export default CourseCommonPage;