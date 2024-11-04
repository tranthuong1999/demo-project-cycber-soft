import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Register, SignIn, apiFetchAccountInfor, apiLogin, apiRegister } from '../../apis/atuhtentication.api';
import { apiDeleteCourse } from '../../apis/category.api';

const name = "authentication"

interface AuthenticationState {
    userInfor: {},
    isLogin: boolean | null,
    isRegister: boolean | null,
    isModalLogin: boolean,
    isModalRegister: boolean,
    accountInfor: any

}

const initialState: AuthenticationState = {
    userInfor: {},
    isLogin: null,
    isRegister: null,
    isModalLogin: false,
    isModalRegister: false,
    accountInfor: {}
}

class AuthenticationAsyncThunk {
    fetchLogin = createAsyncThunk(`${name}/fetchLogin`, async (props: { data: SignIn }) => {
        const { data } = props;
        const result = await apiLogin({ data });
        return result;
    });
    fetchRegister = createAsyncThunk(`${name}/fetchRegister`, async (props: { data: Register }) => {
        const { data } = props;
        const result = await apiRegister({ data });
        return result;
    });
    fetchAccountInfor = createAsyncThunk(`${name}/fetchAccountInfor`, async (taiKhoan: string) => {
        const result = await apiFetchAccountInfor(taiKhoan);
        return result;
    });
    // TODO: Write new thunk here
    fetchDeleteCourse = createAsyncThunk(`category/fetchDeleteCourse`, async (props: { maKhoaHoc: string, taiKhoan: string }) => {
        const { maKhoaHoc, taiKhoan } = props;
        const result = await apiDeleteCourse(maKhoaHoc, taiKhoan);
        return result;
    });
}

const authenticationAsyncThunk = new AuthenticationAsyncThunk();
// action
export const fetchLogin = authenticationAsyncThunk.fetchLogin;
export const fetchRegister = authenticationAsyncThunk.fetchRegister;
export const fetchAccountInfor = authenticationAsyncThunk.fetchAccountInfor;
export const fetchDeleteCourse = authenticationAsyncThunk.fetchDeleteCourse;

const authenticationSlice = createSlice({
    name,
    initialState,
    reducers: {
        setModalLogin(state, action) {
            state.isModalLogin = action.payload
        },
        setModalRegister(state, action) {
            state.isModalRegister = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchLogin.fulfilled, (state, action) => {
            if (action.payload.accessToken) {
                state.userInfor = action.payload;
                state.isLogin = true
                return;
            }
            state.isModalLogin = true;
        });
        builder
            .addCase(fetchRegister.fulfilled, (state, action) => {
                state.isModalRegister = true;
                if (action.payload.message) {
                    state.isRegister = false
                }
                else {
                    state.isRegister = true;
                }
            })
        builder.addCase(fetchAccountInfor.fulfilled, (state, action) => {
            state.accountInfor = action.payload;
        });
        builder.addCase(fetchDeleteCourse.fulfilled, (state, action) => {
            state.accountInfor = {
                ...state.accountInfor,
                chiTietKhoaHocGhiDanh: state.accountInfor.chiTietKhoaHocGhiDanh.filter((item: any) => item.maKhoaHoc !== action.meta.arg.maKhoaHoc)
            }
        });

    }
})

export const { setModalLogin, setModalRegister } = authenticationSlice.actions;

export default authenticationSlice.reducer