import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// First, create the thunk
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('https://nameless-sands-15890.herokuapp.com/products')
      .then(res => res.json())
    return response;

  }
)

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    allProducts: [],
    status: 'idle'
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.allProducts = action.payload
        state.status = 'success'
      })

    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = 'pending';
    })
  },

});

export const { } = productSlice.actions;

export default productSlice.reducer;

