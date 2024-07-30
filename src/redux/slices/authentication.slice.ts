import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import { Register, SignIn, apiFetchAccountInfor, apiLogin, apiRegister } from '../../apis/atuhtentication.api';

const name = "authentication"

interface AuthenticationState {
    userInfor: {},
    isLogin: boolean | null,
    isRegister: boolean | null,
    isModalLogin: boolean,
    accountImfor: {}

}

const initialState: AuthenticationState = {
    userInfor: {},
    isLogin: null,
    isRegister: null,
    isModalLogin: false,
    accountImfor: {}
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
}

const authenticationAsyncThunk = new AuthenticationAsyncThunk();
// action
export const fetchLogin = authenticationAsyncThunk.fetchLogin;
export const fetchRegister = authenticationAsyncThunk.fetchRegister;
export const fetchAccountInfor = authenticationAsyncThunk.fetchAccountInfor;



const authenticationSlice = createSlice({
    name,
    initialState,
    reducers: {
        setModalLogin(state, action) {
            state.isModalLogin = action.payload;
        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchLogin.fulfilled, (state, action) => {
            console.log("fetchLogin.fulfilled", state, action)
            if (action.payload.accessToken) {
                state.userInfor = action.payload;
                state.isLogin = true
                return;
            }
            state.isModalLogin = true;
        });
        builder.addCase(fetchRegister.fulfilled, (state, action) => {
            state.isRegister = true
        });
        builder.addCase(fetchAccountInfor.fulfilled, (state, action) => {
            state.accountImfor = action.payload;
        });
    }
})

export const { setModalLogin } = authenticationSlice.actions;

export default authenticationSlice.reducer