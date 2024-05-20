import React from 'react';
import "./style.scss";
import { Divider } from '@mui/material';
import { useTheme } from "@mui/material/styles"
import { useMediaQuery } from '@mui/material';
import classNames from 'classnames';

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(700));

    return (
        <div className='footer-page'>
            <div className='footer-body'>
                <div className={classNames("row-text-card-title", isMobile ? "row-text-card-title-mobile" : "")}>
                    {/* 1 */}
                    <div className='card-content'>
                        <div className='text-logo'>
                            <span className='textV'>V</span>learning
                            <i className='far fa-keyboard iconLogo' />
                        </div>
                        <ul className='menu-footer'>
                            <li>
                                <i className='fas fa-phone-alt iconFooter' />
                                <span>  1800-123-4567</span>
                            </li>
                            <li>
                                <i className='fas fa-envelope-open-text iconFooter' />
                                <span>devit@gmail.com</span>
                            </li>
                            <li>
                                <i className='fas fa-map-marker-alt iconFooter' />
                                <span>Đà Nẵng</span>
                            </li>
                        </ul>
                    </div>
                    {/* 2 */}
                    <div className={classNames("card-content-center", isMobile ? "card-content-center-mobile" : "")}>
                        <div className='card-content'>
                            <h3 className='text-footer-title'> Liên kết </h3>
                            <ul className='menu-footer'>
                                <li>
                                    <i className='fas fa-chevron-right icon' />
                                    <span>Trang chủ</span>
                                </li>
                                <li>
                                    <i className='fas fa-chevron-right icon' />
                                    <span>Dịch vụ</span>
                                </li>
                                <li>
                                    <i className='fas fa-chevron-right icon' />
                                    <span> Nhóm</span>
                                </li>
                                <li>
                                    <i className='fas fa-chevron-right icon' />
                                    <span> Blog</span>
                                </li>
                            </ul>
                        </div>
                        {/* 3 */}
                        <div className='card-content'>
                            <h3 className='text-footer-title'> Khóa học</h3>
                            <ul className='menu-footer'>
                                <li>
                                    <i className='fas fa-chevron-right icon' />
                                    <span>Front End</span>
                                </li>
                                <li>
                                    <i className='fas fa-chevron-right icon' />
                                    <span> Back End</span>
                                </li>
                                <li>
                                    <i className='fas fa-chevron-right icon' />
                                    <span>Full stack</span>
                                </li>
                                <li>
                                    <i className='fas fa-chevron-right icon' />
                                    <span> Node JS</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                    {/* 4 */}
                    <div className='card-content'>
                        <h3 className='text-footer-title'>Đăng kí tư vấn</h3>
                        <div className='form-sign-in'>
                            <div className='form'>
                                <input className="form-footer" type="text" placeholder="Họ và tên" />
                                <input className="form-footer" type="text" placeholder="Email" />
                                <input className="form-footer" type="text" placeholder="Số điện thoại" />
                            </div>
                            <button className='btn-sign-in'> Đăng kí</button>
                        </div>

                    </div>


                </div>
            </div>
            <Divider />
            <div className={classNames("extra-footer", isMobile ? "extra-footer-mobile" : "")}>
                <div className='text-card-title'>
                    <p> Copyright © 2021. All rights reserved.</p>
                </div>
                <div className='icon-socia'>
                    <i className='fab fa-instagram iconFooter iconSize' />
                    <i className='fab fa-facebook-f iconFooter iconSize' />
                    <i className='fab fa-twitter iconFooter iconSize' />

                </div>
            </div>
        </div>
    )
}

export default Footer