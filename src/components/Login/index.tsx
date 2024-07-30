import React, { useEffect, useState } from 'react';
import "./style.scss";
import { Box, Modal, TextField } from '@mui/material';
import classNames from 'classnames';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchLogin, setModalLogin } from '../../redux/slices/authentication.slice';
import { useNavigate } from 'react-router-dom';
import BasicModal from '../Modal';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const LoginPage = () => {

    const [showViewRegister, setShowViewRegister] = useState(false);
    const [value, setValue] = useState('GP01');
    const navigate = useNavigate();

    const [userInfor, setUserInfor] = useState({
        taiKhoan: "",
        matKhau: ""
    })
    const dispatch = useAppDispatch();
    const { isLogin, isModalLogin } = useAppSelector((state) => state.authenticationReducer);

    const [formData, setFormData] = useState({
        username: '',
        fullname: '',
        password: '',
        email: '',
        phone: '',
        group: ''
    });
    const [errors, setErrors] = useState<any>({});

    const validate = () => {
        let tempErrors: any = {};
        if (!formData.username) tempErrors.username = "Tài khoản không được để trống";
        if (!formData.fullname) tempErrors.fullname = "Họ tên không được để trống";
        if (!formData.password || formData.password.length < 8) tempErrors.password = "Mật khẩu phải ít nhất 8 kí tự";
        if (!formData.email) tempErrors.email = "Email không được để trống";
        if (!formData.phone) tempErrors.phone = "Số điện thoại không được để trống";
        if (!formData.group) tempErrors.group = "Vui lòng chọn nhóm";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRegister = () => {
        if (validate()) {
            // Registration logic here
            console.log("Form is valid. Submitting form...", formData);
        }
        console.log("formData", formData)
    };


    useEffect(() => {
        if (isLogin) {
            navigate("/")
            return;
        }
    }, [isLogin])

    const handleSubmit = async () => {
        dispatch(fetchLogin({ data: userInfor }))
    }

    const renderTabOne = () => {
        return (
            <>
                <div className={classNames('block-1')}>
                    <h1 className='title'>Đăng nhập</h1>
                    <p className="desc">hoặc sử dụng tài khoản đã đăng ký của bạn</p>
                    <div className="field">
                        <TextField
                            required
                            name="taiKhoan"
                            classes={{ root: "field-check" }}
                            placeholder='Tài khoản'
                            onChange={(e) => {
                                setUserInfor((prev) => {
                                    return {
                                        ...prev,
                                        taiKhoan: e.target.value
                                    }
                                })
                            }}
                        />
                    </div>

                    <div className="field field-pass">
                        <TextField
                            required
                            type="password"
                            classes={{ root: "field-check" }}
                            placeholder='Mật khẩu'
                            onChange={(e) => {
                                setUserInfor((prev) => {
                                    return {
                                        ...prev,
                                        matKhau: e.target.value
                                    }
                                })
                            }}
                        />
                    </div>
                    <div className='btn-forget-password'>
                        <button> Quên mật khẩu?</button>
                    </div>
                    <div className='btn-login'>
                        <button onClick={handleSubmit}> Đăng nhập </button>
                    </div>
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
                <div className='block-3'>
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
                    <div className='field'>
                        <TextField
                            classes={{ root: "field-check" }}
                            placeholder='Tài khoản'
                            name='username'
                            value={formData.username}
                            onChange={handleChange}
                            error={!!errors.username}
                            helperText={errors.username}
                        />
                    </div>
                    <div className='field'>
                        <TextField
                            classes={{ root: "field-check" }}
                            placeholder='Họ tên'
                            name='fullname'
                            value={formData.fullname}
                            error={!!errors.fullname}
                            helperText={errors.fullname}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='field'>
                        <TextField
                            type="password"
                            classes={{ root: "field-check" }}
                            placeholder='Mật khẩu'
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            error={!!errors.password}
                            helperText={errors.password}
                        />
                    </div>
                    <div className='field'>
                        <TextField
                            type="email"
                            classes={{ root: "field-check" }}
                            placeholder='Email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                        />
                    </div>
                    <div className='field'>
                        <TextField
                            classes={{ root: "field-check" }}
                            placeholder='Số điện thoại'
                            name='phone'
                            value={formData.phone}
                            onChange={handleChange}
                            error={!!errors.phone}
                            helperText={errors.phone}
                        />
                    </div>
                    <div className='field'>
                        <FormControl fullWidth>
                            <Select
                                value={value}
                                onChange={(e, value) => {
                                    setValue(e.target.value)
                                }}
                            >
                                {
                                    ['GP01', 'GP02', 'GP03', 'GP04', 'GP05', 'GP06', 'GP07', 'GP08', 'GP09', 'GP10'].map((item) => {
                                        return (
                                            <MenuItem value={item} key={item}>{item}</MenuItem>
                                        )
                                    })
                                }
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <button
                            className='btn-register'
                            onClick={handleRegister}
                        >
                            Đăng ký
                        </button>
                    </div>
                </div>
            </>
        )
    }

    const contenLogin = () => {
        return (
            <div className='render-form-login'>
                <div><HelpOutlineIcon sx={{ width: 100, height: 100, color: "#ff000082" }} /> </div>
                <h1 className='title'>Tài khoản hoặc mật khẩu không đúng</h1>
                <p className='desc'>Đã xảy ra lỗi vui lòng quay lại trang chủ hoặc thử lại</p>
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


        </div>
    )
}

export default LoginPage



