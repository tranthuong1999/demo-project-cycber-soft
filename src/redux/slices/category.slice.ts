import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { apiGetListCourse, apiGetistCategory } from '../../apis/category.api';

interface CategoryState {
    listCategories: [],
    listCourse: any
}

const initialState: CategoryState = {
    listCategories: [],
    listCourse: []
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


}

const categoryAsyncThunk = new CategoryAsyncThunk();
// action
export const listCategory = categoryAsyncThunk.listCategory;
export const fetchListCourse = categoryAsyncThunk.fetchListCourse


const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(listCategory.fulfilled, (state, action) => {
            state.listCategories = action.payload;
        });
        builder.addCase(fetchListCourse.fulfilled, (state, action) => {
            state.listCourse = action.payload;
        });
    }
})



export default categorySlice.reducer