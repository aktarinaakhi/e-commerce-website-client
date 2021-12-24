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

const productSlice = createSlice({
  name: 'products',
  initialState: {
    gaming: [],
    gift: [],
    home: [],
    mobile: [],
    maleFashion: [],
    femaleFashion: [],
    baby: [],
    ComputerAndAccesories: [],
    toysAndSport: [],
    status: 'idle'
  },

  reducers: {
    gamingProducts: (state, { payload }) => {
      state.gaming = state.response.filter(gamingProduct => gamingProduct.category === 'Gaming accessories');
    },

    giftProducts: (state, { payload }) => {
      state.readingList = state.readingList.filter(book => book.id !== payload.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.discover = action.payload;
      state.status = 'success'
    })
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = 'pending';
    })
  },

});

export const { gamingProducts, giftProducts } = productSlice.actions;

export default productSlice.reducer;

