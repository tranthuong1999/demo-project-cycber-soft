import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter.slice";


const store = configureStore({
    reducer: {
        counterSlice: counterSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;