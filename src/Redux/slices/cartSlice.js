import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
export const cartSlice = createSlice({
    name: 'cart',
    initialState: {

    },
    reducers: {
        addItemsToCart: (id, quantity) => async (dispatch, getState) => {
            const { data } = await axios.get(`https://nameless-sands-15890.herokuapp.com/products/${id}`);

            // dispatch({
            //     type: ADD_TO_CART,
            //     payload: {
            //         product: data.product._id,
            //         name: data.product.name,
            //         price: data.product.price,
            //         image: data.product.images[0].url,
            //         stock: data.product.Stock,
            //         quantity,
            //     },
            // });

            localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
        },
    },
    extraReducers: (builder) => {
        // builder.addCase(fetchProducts.fulfilled, (state, action) => {
        //   state.allProducts = action.payload
        //   state.status = 'success'
        // })

        // builder.addCase(fetchProducts.pending, (state, action) => {
        //   state.status = 'pending';
        // })
    },
})
export const { aSingleProduct } = cartSlice.actions;

export default cartSlice.reducer;