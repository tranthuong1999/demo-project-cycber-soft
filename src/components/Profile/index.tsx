import React, { useEffect, useState } from 'react';
import "./style.scss";
import { LinearProgress, Rating, Tab, Tabs } from '@mui/material';
import img_profile from "../../assets/image-meta.jpg";
import classNames from 'classnames';
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchAccountInfor, fetchDeleteCourse } from '../../redux/slices/authentication.slice';

const data = [
    { title: "Giờ học", amount: "80", icon: "fas fa-user-clock" },
    { title: "Điểm tổng", amount: "80", icon: "fas fa-layer-group" },
    { title: "Buổi học", amount: "40", icon: "fas fa-swatchbook" },
    { title: "Cấp độ", amount: "Trung cấp", icon: "fas fa-signal" },
    { title: "Học lực", amount: "Khá", icon: "fas fa-graduation-cap" },
    { title: "Bài tập", amount: "100", icon: "fas fa-book" },
]

const ProfilePage = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(600));
    const isTabnet = useMediaQuery(theme.breakpoints.between(600, 900));
    const [value, setValue] = React.useState('1');
    const [searchCourse, setSearchCourse] = useState('');

    const userInfor: any = JSON.parse(localStorage.getItem("credential")!);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { accountInfor } = useAppSelector(state => state.authenticationReducer)

    useEffect(() => {
        if (!userInfor) {
            navigate("/")
            return;
        }
        dispatch(fetchAccountInfor(userInfor?.taiKhoan))
    }, [])

    const handleDeleteCourse = (item: any) => {
        console.log("item", item)
        console.log("taikhaong", { taiKhoan: userInfor?.taiKhoan })

        dispatch(fetchDeleteCourse({ maKhoaHoc: item.maKhoaHoc, taiKhoan: userInfor?.taiKhoan }))
    }

    const renderAvartar = () => {
        return (
            <div className='block-2-left'>
                <div className='img-logo'>
                    <img src="https://cdn.dribbble.com/users/2364329/screenshots/6676961/02.jpg?compress=1&resize=800x600" />
                </div>
                <p className='name'>{accountInfor.hoTen}</p>
                <p className='title-program'> Lập trình viên Front-end</p>
                <div>
                    <button className='btn-profile'>Hồ sơ cá nhân</button>
                </div>
            </div>
        )
    }


    const renderProfile = () => {
        return (
            <div className={classNames("block-2-profile", isMobile ? "block-2-profile-mobile" : "")}>
                {!isMobile ? renderAvartar() : ""}
                <div className='block-2-right'>
                    <div className='block-2-top'>
                        <div className='block-2-top-left'>
                            <p className='name-desc'><span>Email: </span>{accountInfor.email}</p>
                            <p className='name-desc'><span>Họ và tên: </span>{accountInfor.hoTen}</p>
                            <p className='name-desc'><span>Số điện thoại: </span>{accountInfor.soDT}</p>
                        </div>

                        <div className='block-2-top-left'>
                            <p className='name-desc'><span>Tài khoản: </span>{accountInfor.taiKhoan}</p>
                            <p className='name-desc'><span>Nhóm: </span>{accountInfor.maNhom}</p>
                            <p className='name-desc'><span>Đối tượng: </span>Học viên</p>
                            <div>
                                <button className='btn-update'>Câp nhật</button>
                            </div>
                        </div>

                    </div>

                    <div>
                        <h2 style={{ margin: "30px 0px" }}>KĨ NĂNG CỦA TÔI</h2>
                        <div className={classNames("block-2-bottom", isMobile ? "block-2-bottom-mobile" : "")}>
                            <div className='block-2-bottom-left'>
                                <div className='block-2-bottom-left-child'>
                                    <p className='html'>HTML</p>
                                    <div className='progress'>
                                        <LinearProgress
                                            variant="determinate"
                                            classes={{ root: "progress-bar" }}
                                        />
                                    </div>
                                </div>
                                <div className='block-2-bottom-left-child'>
                                    <p className='css'>CSS</p>
                                    <div className='progress'>
                                        <LinearProgress
                                            value={75}
                                            variant="determinate"
                                            classes={{ root: "progress-bar" }}
                                        />
                                    </div>
                                </div>
                                <div className='block-2-bottom-left-child'>
                                    <p className='js'>JS</p>
                                    <div className='progress'>
                                        <LinearProgress
                                            value={50}
                                            variant="determinate"
                                            classes={{ root: "progress-bar" }}
                                        />
                                    </div>
                                </div>
                                <div className='block-2-bottom-left-child'>
                                    <p className='react'>REACT</p>
                                    <div className='progress'>
                                        <LinearProgress
                                            value={85}
                                            variant="determinate"
                                            classes={{ root: "progress-bar" }}
                                        />
                                    </div>
                                </div>


                            </div>
                            <div className='block-2-bottom-right'>
                                {
                                    data.map((item) => {
                                        return (
                                            <div className='item'>
                                                <i className={item.icon} />
                                                <div>
                                                    <h6> {item.title}</h6>
                                                    <p>{item.amount}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const renderCourse = () => {
        return (
            <div className='information-course'>
                <div className='block-1'>
                    {!isMobile ? renderAvartar() : ""}
                </div>
                <div className='block-2'>
                    <div className='block-2-top'>
                        <h1>KHÓA HỌC CỦA TÔI</h1>
                        {!isMobile && <p className='search'>
                            <input onChange={(e: any) => {
                                setSearchCourse(e.target.value)
                            }}
                                className="search-form"
                                placeholder='Tìm kiếm'
                            />
                        </p>
                        }
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                        {
                            // searchCourse.trim().length > 0 ? (accountInfor?.chiTietKhoaHocGhiDanh?.filter((course: any) => course?.tenKhoaHoc.toLowerCase().includes(searchCourse.toLowerCase()))) :
                            (accountInfor?.chiTietKhoaHocGhiDanh)?.map((item: any, index: number) => {
                                return (
                                    <div key={index} className={classNames("block-2-bottom", isMobile ? "block-2-bottom-mobile" : "")}>
                                        <div className='img-logo'>
                                            <img src={item?.hinhAnh} />
                                        </div>

                                        <div className='block-2-bottom-child'>
                                            <h3 className='name'>{item?.tenKhoaHoc}</h3>
                                            <p className='desc'>ES6 là một chuẩn Javascript mới được đưa ra vào năm 2015 với nhiều quy tắc và cách sử dụng khác nhau.</p>
                                            <div className='date'>
                                                <p className='hour-1'> <i className='far fa-clock iconOclock' />8 giờ</p>
                                                <p className='hour-2'> <i className='far fa-calendar iconCalendar' /> 23 giờ</p>
                                                <p className='level'> <i className='fas fa-signal iconLevel ' /> All level</p>
                                            </div>
                                            <div>
                                                <Rating name="read-only" value={5} readOnly />
                                            </div>
                                            <div className='child-bottom'>
                                                <p className="name-present">
                                                    <img src={img_profile} />
                                                    Nguyễn Nam
                                                </p>
                                                <div>
                                                    <button
                                                        onClick={() => handleDeleteCourse(item)}
                                                        className="btn-cancel"
                                                    >
                                                        Huỷ khoá học
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }

    const check = (accountInfor?.chiTietKhoaHocGhiDanh?.filter((course: any) => course?.tenKhoaHoc.toLowerCase().includes(searchCourse.toLowerCase())))

    console.log("accountInfor", check)

    return (
        <div className='profile-page'>
            <div className='block-1-profile'>
                <h3>THÔNG TIN CÁ NHÂN</h3>
                <p>THÔNG TIN HỌC VIÊN</p>
            </div>
            <div className='tab-course'>
                <Tabs
                    value={value}
                    onChange={(event: React.SyntheticEvent, newValue: string) => {
                        setValue(newValue)
                    }}
                >
                    <Tab classes={{ root: "tab-profile" }} value="1" label="Thông tin cá nhân" />
                    <Tab classes={{ root: "tab-course" }} value="2" label="Khoá học" />
                </Tabs>
            </div>
            <div>
                {value === "1" ? renderProfile() : renderCourse()}
            </div>

        </div>
    )
}

export default ProfilePage

function dispatch(arg0: any) {
    throw new Error('Function not implemented.');
}
