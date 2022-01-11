import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const fetchOrders = createAsyncThunk(
    'orders/fetchOrders',
    async () => {
        const response = await fetch('https://nameless-sands-15890.herokuapp.com/orders')
            .then(res => res.json())
        console.log(response);
        return response;
    }
)


export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        allOrders: []
    },
    reducers: {
        addItemsToCart: (id, quantity) => async (dispatch, getState) => {
            const { data } = await axios.get(`https://nameless-sands-15890.herokuapp.com/products/${id}`);

            localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchOrders.fulfilled, (state, action) => {
            state.allOrders = action.payload
            state.status = 'success'
        })

        builder.addCase(fetchOrders.pending, (state, action) => {
            state.status = 'pending';
        })
    },
})
export const { aSingleProduct } = cartSlice.actions;

export default cartSlice.reducer;