import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../Redux/slices/productSlice'
import cartReducer from '../Redux/slices/cartSlice'

export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
    },
})