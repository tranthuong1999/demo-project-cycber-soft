import React, { useState } from 'react';
import "./style.scss";
import logo from '../../assets/logo.png'
import classNames from "classnames";
import { Button, Tooltip, useMediaQuery } from '@mui/material';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { useTheme } from "@mui/material/styles"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const itemCategory = [
    { name: "LẬP TRÌNH BACKEND", href: "" },
    { name: "THIẾT KẾ WEB", href: "" },
    { name: "LẬP TRÌNH DI ĐỘNG", href: "" },
    { name: "LẬP TRÌNH FONTEND", href: "" },
    { name: "LẬP TRÌNH FULLSTACK", href: "" },
    { name: "TƯ DUY LẬP TRÌNH", href: "" }
]
const itemEvent = [
    { name: "SỰ KIỆN SALE CUỐI NĂM", href: "" },
    { name: "SỰ KIỆN GIÁNG SINH", href: "" },
    { name: "SỰ KIỆN NOEL", href: "" },
]

const Appbar = () => {
    const [isFocused, setIsFocused] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(750));

    const handleSearchOnFocus = () => {
        setIsFocused(true);
    };

    const handleSearchBlur = () => {
        setIsFocused(false);
    };


    console.log("isMobile", isMobile)

    return (
        <div className='app-bar'>
            <div className='header-left'>
                <div className='header-left-logo'>
                    <img src={logo} alt="Logo" width={250} />
                </div>
                {!isMobile && <div>
                    <input
                        onFocus={handleSearchOnFocus}
                        onBlur={handleSearchBlur}
                        className={classNames('search-form', isFocused ? "search-form-focus" : "")}
                        placeholder='Tìm kiếm'
                    />
                </div>}
            </div>
            {!isMobile && <div className='header-right'>
                <Tooltip
                    classes={{ tooltip: "category-tooltip" }}
                    placement="bottom-start"
                    title={
                        <div className="sub-title-category">
                            {
                                itemCategory.map((item) => {
                                    return (
                                        <Button className='item-button'>
                                            {item.name}
                                        </Button>
                                    )
                                })
                            }
                        </div>
                    }
                >
                    <Button
                        className="header-right-menu"
                        startIcon={<DensityMediumIcon />}
                    >
                        DANH MỤC
                    </Button>
                </Tooltip>
                <Tooltip title="" >
                    <Button className="header-right-menu"  >KHOÁ HỌC</Button>
                </Tooltip>
                <Tooltip title="" >
                    <Button className="header-right-menu">BLOG</Button>
                </Tooltip>
                <Tooltip
                    classes={{ tooltip: "category-tooltip" }}
                    placement="bottom-start"
                    title={
                        <div className="sub-title-category">
                            {
                                itemEvent.map((item) => {
                                    return (
                                        <Button className='item-button'>
                                            {item.name}
                                        </Button>
                                    )
                                })
                            }
                        </div>
                    }
                >
                    <Button className="header-right-menu">SỰ KIỆN</Button>
                </Tooltip>
                <Tooltip title="">
                    <Button className="header-right-menu">THÔNG TIN</Button>
                </Tooltip>
            </div>}
            <div className='show-icon-header'>
                <button className="login">
                    <a> Đăng nhập</a>
                </button>
                {
                    !!isMobile
                    &&
                    <div className='menu-mobile'>
                        <div className='icon-show-menu'>
                            <ArrowDropDownIcon style={{ fontSize: "30px", fontWeight: 900 }} />
                        </div>
                        <div className='list-menu'>
                            <div className='menu'>
                                <input placeholder='Tìm kiếm' className='icon-search' />
                            </div>
                            <Tooltip
                                classes={{ tooltip: "category-tooltip-mobile" }}
                                placement="left-end"
                                title={
                                    <div className="sub-title-category">
                                        {
                                            itemCategory.map((item) => {
                                                return (
                                                    <Button className='item-button'>
                                                        {item.name}
                                                    </Button>
                                                )
                                            })
                                        }
                                    </div>
                                }
                            >
                                <Button
                                    className="header-right-menu"
                                >
                                    DANH MỤC
                                </Button>
                            </Tooltip>
                            <Tooltip title="" >
                                <Button className="header-right-menu"  >KHOÁ HỌC</Button>
                            </Tooltip>
                            <Tooltip title="" >
                                <Button className="header-right-menu">BLOG</Button>
                            </Tooltip>
                            <Tooltip
                                classes={{ tooltip: "category-tooltip-mobile" }}
                                placement="left-end"
                                title={
                                    <div className="sub-title-category">
                                        {
                                            itemEvent.map((item) => {
                                                return (
                                                    <Button className='item-button'>
                                                        {item.name}
                                                    </Button>
                                                )
                                            })
                                        }
                                    </div>
                                }
                            >
                                <Button className="header-right-menu">SỰ KIỆN</Button>
                            </Tooltip>
                            <Tooltip title="">
                                <Button className="header-right-menu">THÔNG TIN</Button>
                            </Tooltip>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Appbar