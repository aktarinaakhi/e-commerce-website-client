import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../Redux/slices/productSlice'

export const store = configureStore({
    reducer: {
        products: productReducer,
    },
})