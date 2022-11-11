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
);

export const PushProcessed = createAsyncThunk(
    'data/pushProcessed',
    (data) => {
        return axios.post('/processed.json', data).then(res => {
            console.log(res);
            return res.data;
        });
    }
)

export const pullProcessed =  createAsyncThunk(
    'data/proccessed',
    () => {
        return axios.get('/processed.json').then(res => res.data);
    }
)

const orders =  createSlice({
    name: 'orders',
    initialState: {
        orderData: {},
        loadingStatus: null,
        error: null,
        pulledOrders: {},
        pullingStatus: null,
        pushProcessedState: null,
        processedState: null,
        processed: {}

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
        });
        builder
        .addCase(PushProcessed.pending, (state, action) => {
            state.pushProcessedState = 'loading';
        })
        .addCase(PushProcessed.fulfilled, (state, action) => {
            state.pushProcessedState = 'succeeded';
        })
        .addCase(PushProcessed.rejected, (state, action) => {
            state.pushProcessedState = 'failed';
        });

        builder
        .addCase(pullProcessed.pending, (state, action) => {
            state.processedState = 'loading'
        })
        .addCase(pullProcessed.fulfilled, (state, action) => {
            state.processed = action.payload;
            state.processedState = 'succeeded';
        })
        .addCase(pullProcessed.rejected, (state, action) => {
            state.processedState = 'failed';
        })
    }
});

export const { RESETSTATUS } = orders.actions;

export default orders.reducer;