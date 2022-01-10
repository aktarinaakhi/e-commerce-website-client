import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// First, create the thunk
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('https://nameless-sands-15890.herokuapp.com/products')
      .then(res => res.json())
    // console.log(response);
    return response;
  }
)

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    allProducts: [],
    gaming: [],
    gift: [],
    home: [],
    male: [],
    female: [],
    baby: [],
    mobile: [],
    singleProduct: {},
    ComputerAndAccesories: [],
    toysAndSport: [],
    cart: [],
    status: 'idle'
  },

  reducers: {


    aSingleProduct: (state, { payload }) => {
      state.singleProduct = state.singleProduct.find(product => product._id === payload._id)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.allProducts = action.payload
      state.status = 'success'
    })

    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = 'pending';
    })
  },

});

export const { aSingleProduct } = productSlice.actions;

export default productSlice.reducer;

