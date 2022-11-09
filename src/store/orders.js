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

export const pullOrders = createAsyncThunk(
    'data/pullOrders',
    () => {
        return axios.get('/orders.json').then(res => {
            // console.log(res.data);
            return res.data;
        })
    }
)

const orders =  createSlice({
    name: 'orders',
    initialState: {
        orderData: {},
        loadingStatus: null,
        error: null,
        pulledOrders: {},
        pullingStatus: null
    }, 
    reducers: {
        RESETSTATUS: (state, action) => {
            state.loadingStatus = null;
            state.orderData = {};
        }
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
        });

        builder
        .addCase(pullOrders.pending, (state, action) => {
            state.pullingStatus = 'loading';
        })
        .addCase(pullOrders.fulfilled, (state, action) => {
            state.pullingStatus = 'succeeded';
            state.pulledOrders = action.payload;
        })
        .addCase(pullOrders.rejected, (state, action) => {
            state.pullingStatus = 'failed';
        })
    }
});

export const { RESETSTATUS } = orders.actions;

export default orders.reducer;