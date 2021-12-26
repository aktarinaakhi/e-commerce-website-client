import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// First, create the thunk
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('http://localhost:5000/products')
      .then(res => res.json())
    console.log(response);
    return response;
  }
)

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    gaming: [],
    gift: [],
    home: [],
    mobile: [],
    male: [],
    female: [],
    baby: [],
    ComputerAndAccesories: [],
    toysAndSport: [],
    status: 'idle'
  },

  reducers: {

    giftProducts: (state, { payload }) => {
      state.readingList = state.readingList.filter(book => book.id !== payload.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.gaming = action.payload
      state.home = action.payload
      state.status = 'success'
    })

    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = 'pending';
    })
  },

});

export const { gamingProducts, giftProducts, gaming, home } = productSlice.actions;

export default productSlice.reducer;

