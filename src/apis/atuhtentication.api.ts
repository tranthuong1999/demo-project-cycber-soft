
export type SignIn = {
    taiKhoan: string,
    matKhau: string
}

export type Register = {
    email: string,
    hoTen: string,
    maNhom: string,
    matKhau: string,
    soDT: string,
    taiKhoan: string

}

const BASE_URL = "https://elearningnew.cybersoft.edu.vn/api"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJUcmFpbmluZyBnaeG6o25nIHZpw6puIGN5YmVyc29mdCAyMDIyIiwiSGV0SGFuU3RyaW5nIjoiMzAvMTEvMjAyOCIsIkhldEhhblRpbWUiOiIxODU5MTU1MjAwMDAwIiwibmJmIjoxNTg0MjkxNjAwLCJleHAiOjE4NTkzMDI4MDB9.9nOWAOoO7NtipuO-A-4_8kwzVp7j5HSdXjEegqTgcXI"

export const apiLogin = async (props: { data: SignIn }) => {
    const { data } = props;
    try {
        const response = await fetch(`${BASE_URL}/QuanLyNguoiDung/DangNhap`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Tokencybersoft": `${token}`,
            },
            body: JSON.stringify(data),
        });
        const result: any = await response.json();
        localStorage.setItem('credential', JSON.stringify(result))
        return result;
    }
    catch (error) {
        return error;
    }
}

export const apiRegister = async (props: { data: Register }) => {
    const { data } = props;
    try {
        const response = await fetch(`${BASE_URL}/QuanLyNguoiDung/DangKy`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Tokencybersoft": `${token}`,
            },
            body: JSON.stringify(data),
        });
        const result: any = await response.json();
        return result;
    }
    catch (error) {
        return error;
    }
}
