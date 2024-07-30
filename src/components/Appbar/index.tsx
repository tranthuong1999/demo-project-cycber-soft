import React, { useEffect, useState } from 'react';
import "./style.scss";
import logo from '../../assets/logo.png'
import classNames from "classnames";
import { Avatar, Button, Tooltip, useMediaQuery } from '@mui/material';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { useTheme } from "@mui/material/styles"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { listCategory, setCurrentCategory } from '../../redux/slices/category.slice';
import { useNavigate } from 'react-router-dom';
import { deepOrange } from '@mui/material/colors';
import LogoutIcon from '@mui/icons-material/Logout';

const itemEvent = [
    { name: "SỰ KIỆN SALE CUỐI NĂM", href: "" },
    { name: "SỰ KIỆN GIÁNG SINH", href: "" },
    { name: "SỰ KIỆN NOEL", href: "" },
]

const Appbar = () => {
    const [isFocused, setIsFocused] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(750));
    const [isEffectMenu, setIsEffectMenu] = useState(false)
    const navigate = useNavigate();
    const currentUSer = JSON.parse(localStorage.getItem("credential")!)

    const { listCategories } = useAppSelector((state) => state.categoryReducer);
    const dispatch = useAppDispatch();


    const handleSearchOnFocus = () => {
        setIsFocused(true);
    };

    const handleSearchBlur = () => {
        setIsFocused(false);
    };
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
                                listCategories?.map((item: any) => {
                                    return (
                                        <Button
                                            className='item-button'
                                            onClick={() => {
                                                dispatch(setCurrentCategory(item))
                                                navigate(`/course-by-category/${item.maDanhMuc}`, { state: item })
                                            }}>
                                            {item.tenDanhMuc}
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
                    <Button className="header-right-menu" onClick={() => navigate("/course")} >KHOÁ HỌC</Button>
                </Tooltip>
                <Tooltip title="" >
                    <Button className="header-right-menu" onClick={() => navigate("/blog")}>BLOG</Button>
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
                    <Button className="header-right-menu" onClick={() => navigate("/event")}>SỰ KIỆN</Button>
                </Tooltip>
                <Tooltip title="">
                    <Button className="header-right-menu" onClick={() => navigate("/information")}>THÔNG TIN</Button>
                </Tooltip>
            </div>}
            <div className='show-icon-header'>
                {!currentUSer ?
                    <button className="login" onClick={() => {
                        navigate("/login")
                        return;
                    }}
                    >
                        Đăng nhập
                    </button> :
                    <div className='view-logout'>
                        <Avatar onClick={() => navigate("/profile")} classes={{ root: "avatar-home" }} sx={{ bgcolor: deepOrange[500] }}>{currentUSer?.taiKhoan?.slice(0, 1) || ""}</Avatar>
                        <div className='icon-logout'>
                            <Tooltip title="Logout" onClick={() => {
                                localStorage.clear()
                                navigate("/")
                                return;
                            }}>
                                <LogoutIcon />
                            </Tooltip>
                        </div>
                    </div>
                }
                {
                    !!isMobile
                    &&
                    <div className='menu-mobile'>
                        <div className='icon-show-menu' onClick={() => setIsEffectMenu(!isEffectMenu)}>
                            <ArrowDropDownIcon style={{ fontSize: "30px", fontWeight: 900 }} />
                        </div>
                        <div className={classNames("list-menu", isEffectMenu ? "list-menu-active" : "")}>
                            <div className='menu'>
                                <input placeholder='Tìm kiếm' className='icon-search' />
                            </div>
                            <Tooltip
                                classes={{ tooltip: "category-tooltip-mobile" }}
                                placement="left-end"
                                title={
                                    <div className="sub-title-category">
                                        {
                                            listCategories?.map((item: any) => {
                                                return (
                                                    <Button className='item-button'>
                                                        {item.tenDanhMuc}
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
                                <Button onClick={() => navigate("/course")} className="header-right-menu" >KHOÁ HỌC</Button>
                            </Tooltip>
                            <Tooltip title="" >
                                <Button className="header-right-menu" onClick={() => navigate("/blog")}>BLOG</Button>
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
                                <Button className="header-right-menu" onClick={() => navigate("/event")}>SỰ KIỆN</Button>
                            </Tooltip>
                            <Tooltip title="">
                                <Button className="header-right-menu" onClick={() => navigate("/information")} >THÔNG TIN</Button>
                            </Tooltip>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Appbar