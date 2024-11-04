import React, { useEffect, useState } from 'react';
import "./style.scss";
import { Modal } from '@mui/material';
import classNames from 'classnames';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchLogin, fetchRegister, setModalLogin, setModalRegister } from '../../redux/slices/authentication.slice';
import { useNavigate } from 'react-router-dom';
import BasicModal from '../Modal';
// import {HelpOutlineIcon} from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useTheme } from "@mui/material/styles"
import { useMediaQuery } from '@mui/material';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';



const schema = Yup.object().shape({
    account: Yup.string().required('Tài khoản không được để trống').min(3, 'Tài khoản phải có ít nhất 3 ký tự'),
    name: Yup.string().required('Tên không được bỏ trống').min(3, 'Tài khoản phải có ít nhất 3 ký tự'),
    password: Yup.string()
        .required('Mật khẩu không được bỏ trống')
        .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
        .matches(/[a-z]/, 'Mật khẩu phải có ít nhất một chữ cái thường')
        .matches(/[A-Z]/, 'Mật khẩu phải có ít nhất một chữ cái hoa'),
    email: Yup.string()
        .required('Email không được để trống')
        .email('Email không hợp lệ'),
    phone: Yup.string()
        .required('Số điện thoại không được để trống')
        .matches(/^(0|\+84)(3|5|7|8|9)[0-9]{8}$/, 'Số điện thoại không hợp lệ'),
});

const schema_login = Yup.object().shape({
    account: Yup.string().required('Tài khoản không được để trống'),
    password: Yup.string()
        .required('Mật khẩu không được bỏ trống')
        .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
        .matches(/[a-z]/, 'Mật khẩu phải có ít nhất một chữ cái thường')
        .matches(/[A-Z]/, 'Mật khẩu phải có ít nhất một chữ cái hoa'),
});


const LoginPage = () => {
    const [showViewRegister, setShowViewRegister] = useState(false);
    const [value, setValue] = useState('GP01');
    const navigate = useNavigate();
    const theme = useTheme();
    const dispatch = useAppDispatch();
    const { isLogin, isModalLogin, isRegister, isModalRegister } = useAppSelector((state) => state.authenticationReducer);

    const isMobile = useMediaQuery(theme.breakpoints.down(800));
    const { register, handleSubmit, reset: resetRegister, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const { register: registerLogin, reset: resetLogin, handleSubmit: handleSubmitLogin, formState: { errors: errorsLogin } } = useForm({
        resolver: yupResolver(schema_login),
    });

    const onSubmit = (data: any) => {
        const { email, account, name, phone, password } = data;
        dispatch(fetchRegister({
            data: {
                email: email,
                hoTen: name,
                matKhau: password,
                soDT: phone,
                taiKhoan: account,
                maNhom: value
            }
        }))

    };

    const onLoginSubmit = (data: any) => {
        dispatch(fetchLogin({
            data: {
                taiKhoan: data.account,
                matKhau: data.password
            }
        }))
    };
    useEffect(() => {
        if (isRegister) {
            resetRegister();
        }
    }, [isRegister])

    useEffect(() => {
        if (isLogin) {
            navigate("/")
            return;
        }
    }, [isLogin])



    const renderTabOne = () => {
        return (
            <>
                <div className={classNames('block-1')}>
                    <h1 className='title'>Đăng nhập</h1>
                    <p className="desc">hoặc sử dụng tài khoản đã đăng ký của bạn</p>

                    <form onSubmit={handleSubmitLogin(onLoginSubmit)} className='form-login'>
                        <div>
                            <input className='field' {...registerLogin('account')} placeholder='Tài khoản' />
                            {errorsLogin.account && <p className="error-message">{errorsLogin?.account?.message}</p>}
                        </div>
                        <div>
                            <input type="password" className='field' {...registerLogin('password')} placeholder='Mật khẩu' />
                            {errorsLogin.password && <p className="error-message">{errorsLogin?.password?.message}</p>}
                        </div>
                        <div className='btn-login'>
                            <button type="submit">Đăng nhập</button>
                        </div>
                    </form>

                </div>
                <div className='block-2'>
                    <h1 className='title'>Xin chào! </h1>
                    <p className='desc'>Vui lòng nhấn đăng ký để thiết lập thông tin tài khoản của bạn!</p>
                    <div >
                        <button
                            onClick={() => setShowViewRegister(true)}
                            className='btn-register'
                        >
                            Đăng ký
                        </button>
                    </div>
                </div>
            </>
        )
    }

    const renderTabTwo = () => {
        return (
            <>
                <div className={classNames("block-3", isMobile ? 'block-3-tabnet' : "")}>
                    <h1>Chào mừng bạn đã trở lại!</h1>
                    <p>Vui lòng đăng nhập để kết nối với tài khoản của bạn</p>
                    <div>
                        <button
                            onClick={() => setShowViewRegister(false)}
                            className='btn-login'>
                            Đăng nhập
                        </button>
                    </div>
                </div>
                <div className='block-4'>
                    <h1 className='title'>ĐĂNG KÝ</h1>

                    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "80%" }}>
                        <div className='form-register'>
                            <div>
                                <input className='field' {...register('account')} placeholder='Tài khoản' />
                                {errors.account && <p className="error-message">{errors?.account?.message}</p>}
                            </div>

                            <div>
                                <input className='field' {...register('name')} placeholder='Họ tên' />
                                {errors.name && <p className="error-message">{errors?.name?.message}</p>}
                            </div>

                            <div>
                                <input type="password" className='field' {...register('password')} placeholder='Mật khẩu' />
                                {errors.password && <p className="error-message">{errors?.password?.message}</p>}
                            </div>

                            <div>
                                <input className='field' {...register('email')} placeholder='Email' />
                                {errors.email && <p className="error-message">{errors?.email?.message}</p>}
                            </div>

                            <div>
                                <input className='field' {...register('phone')} placeholder='Số điện thoại' />
                                {errors.phone && <p className="error-message">{errors?.phone?.message}</p>}
                            </div>

                            <div style={{ backgroundColor: "#eee" }}>
                                <FormControl fullWidth>
                                    <Select
                                        value={value}
                                        onChange={(e) => {
                                            setValue(e.target.value);
                                        }}
                                    >
                                        {['GP01', 'GP02', 'GP03', 'GP04', 'GP05', 'GP06', 'GP07', 'GP08', 'GP09', 'GP10'].map((item) => (
                                            <MenuItem value={item} key={item}>{item}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>

                            <div className='btn-form'>
                                <button className='btn-register' type="submit">Đăng ký</button>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    }

    const contenLogin = () => {
        return (
            <div className='render-form-login'>
                {/* <div data-aos="flip-left"><HelpOutlineIcon sx={{ width: 100, height: 100, color: "#ff000082" }} /> </div> */}
                <h1 className='title'>Tài khoản hoặc mật khẩu không đúng</h1>
                <p className='desc'>Đã xảy ra lỗi vui lòng quay lại trang chủ hoặc thử lại</p>
            </div>
        )
    }

    const contenRegiterFailed = () => {
        return (
            <div className='render-form-register'>
                {/* <div data-aos="flip-left"><HelpOutlineIcon sx={{ width: 100, height: 100, color: "#ff000082" }} /> </div> */}
                <h1 className='title'>Email hoặc tài khoản đã tồn tại!</h1>
                <p className='desc'>Đã xảy ra lỗi vui lòng quay lại trang chủ hoặc thử lại</p>
            </div>
        )
    }

    const contenRegisterSucc = () => {
        return (
            <div className='render-form-register_succ'>
                <div data-aos="flip-left"><DownloadDoneIcon sx={{ width: 100, height: 100, color: "#8dc572" }} /> </div>
                <h1 className='desc'>Đăng ký thành công</h1>
            </div>
        )
    }

    return (
        <div className='login-page'>
            <Modal open={true}>
                <div className='modal-authen'>
                    {/* {renderTabOne()} */}
                    {!showViewRegister ? renderTabOne() : renderTabTwo()}
                </div>
            </Modal>
            {
                isModalLogin &&
                <BasicModal
                    open={true}
                    onClose={() => dispatch(setModalLogin(false))}
                    content={contenLogin()}
                />
            }

            {
                isModalRegister &&
                <BasicModal
                    open={true}
                    onClose={() => {
                        dispatch(setModalRegister(false))
                    }}
                    content={!isRegister ? contenRegiterFailed() : contenRegisterSucc()}
                />
            }


        </div>
    )
}

export default LoginPage



