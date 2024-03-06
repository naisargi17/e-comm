import {configureStore} from "@reduxjs/toolkit"
import productSlice from "./silces/productSlice"
export const store = configureStore({
    reducer:{
        app: productSlice
    }
})