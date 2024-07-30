import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/category.slice";
import authenticationSlice from "./slices/authentication.slice";

const store = configureStore({
    reducer: {
        categoryReducer: categorySlice,
        authenticationReducer: authenticationSlice

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;