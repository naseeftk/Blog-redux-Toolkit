import { configureStore } from "@reduxjs/toolkit";
import blogReducer from '../Counter/Counter'

export const store=configureStore({
    reducer:{
        blogg:blogReducer

    }
})