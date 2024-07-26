import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { apiFetchCourseByCategory, apiGetListCourse, apiGetistCategory } from '../../apis/category.api';


type category = {
    maDanhMuc: string,
    tenDanhMuc: string
}
interface CategoryState {
    listCategories: [],
    listCourse: any,
    listCourseByCategory: [],
    currentCategory: category | null
}

const initialState: CategoryState = {
    listCategories: [],
    listCourse: [],
    listCourseByCategory: [],
    currentCategory: null
}

class CategoryAsyncThunk {
    // TODO: Write new thunk here
    listCategory = createAsyncThunk(`category/createSubTask`, async () => {
        const result = await apiGetistCategory();
        return result;
    });

    fetchListCourse = createAsyncThunk(`category/fetchListCourse`, async (props: { page: number, pageSize?: number, MaNhom?: string }) => {
        const { page, pageSize, MaNhom } = props;
        const result = await apiGetListCourse({ page, pageSize, MaNhom });
        return result;
    });

    fetchCourseByCategory = createAsyncThunk(`category/fetchCourseByCategory`, async (category: string) => {
        const result = await apiFetchCourseByCategory(category);
        return result;
    });
}

const categoryAsyncThunk = new CategoryAsyncThunk();
// action
export const listCategory = categoryAsyncThunk.listCategory;
export const fetchListCourse = categoryAsyncThunk.fetchListCourse
export const fetchCourseByCategory = categoryAsyncThunk.fetchCourseByCategory


const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCurrentCategory(state, action) {
            state.currentCategory = action.payload;
        }

    },
    extraReducers: (builder) => {
        builder.addCase(listCategory.fulfilled, (state, action) => {
            state.listCategories = action.payload;
        });
        builder.addCase(fetchListCourse.fulfilled, (state, action) => {
            state.listCourse = action.payload;
        });
        builder.addCase(fetchCourseByCategory.fulfilled, (state, action) => {
            state.listCourseByCategory = action.payload;
        });
    }
})

export const { setCurrentCategory } = categorySlice.actions;

export default categorySlice.reducer