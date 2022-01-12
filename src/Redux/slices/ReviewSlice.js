import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const fetchReviews = createAsyncThunk(
    'reviews/fetchReviews',
    async () => {
        const response = await fetch('https://nameless-sands-15890.herokuapp.com/reviews')
            .then(res => res.json())
        console.log(response);
        return response;
    }
)

export const reviewSlice = createSlice({
    name: 'review',
    initialState: {
        allreviews: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchReviews.fulfilled, (state, action) => {
            state.allreviews = action.payload
            state.status = 'success'
        })

        builder.addCase(fetchReviews.pending, (state, action) => {
            state.status = 'pending';
        })
    },
})
export const { } = reviewSlice.actions;

export default reviewSlice.reducer;