import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { apiGetistCategory } from '../../apis/category.api';

interface CategoryState {
    listCategories: []
}

const initialState: CategoryState = {
    listCategories: []
}

class CategoryAsyncThunk {
    // TODO: Write new thunk here
    listCategory = createAsyncThunk(`category/createSubTask`, async () => {
        const result = await apiGetistCategory();
        return result;
    });
}

const categoryAsyncThunk = new CategoryAsyncThunk();
// action
export const listCategory = categoryAsyncThunk.listCategory;


const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(listCategory.fulfilled, (state, action) => {
            // console.log("state listCategory", current(state))
            // console.log("action listCategory", action)
            state.listCategories = action.payload;

        });
    }
})



export default categorySlice.reducer