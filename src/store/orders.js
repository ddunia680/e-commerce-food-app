import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../axios-orders'


export const postData = createAsyncThunk(
    'data/postOrder',
    (data) => {
        return axios.post('/orders.json', data).then(res => {
            console.log(res.data);
        })
    }
); 

const orders =  createSlice({
    name: 'orders',
    initialState: {
        orderDate: {},
        loadingStatus: null,
        error: null
    },
    extraReducers(builder) {
        builder
        .addCase(postData.pending, (state, action) => {
            state.loadingStatus = 'loading';
        })
        .addCase(postData.fulfilled, (state, action) => {
            state.loadingStatus = 'succeeded';
        })
        .addCase(postData.rejected, (state, action) => {
            state.loadingStatus = 'failed';
            state.error = action.error.message;
        })
    }
});

export default orders.reducer;