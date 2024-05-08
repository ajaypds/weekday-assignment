import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./jobSlice"

export * from './jobSlice'

export const store = configureStore({
    reducer: {
        job: jobReducer
    },
});