import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../axios-orders";


export const pushToIceCreams = createAsyncThunk(
    'data/pushToIcecreams',
    (data) => {
        return axios.post('/icecreamsList.json', data).then(res => {
            console.log(res.data);
            return res.data;
        })
    }
);

export const pullIcecreams = createAsyncThunk(
    'data/pulledArticles',
    () => {
        return axios.get('/icecreamsList.json').then(res => {
            // console.log(res.data);
            return res.data;
        })
    }
);

const icecreamsSlice = createSlice({
    name: 'icecreams',
    initialState: {
        icecreams : [],
        pullingStatus: '',
        error: ''
        
    },

    reducers: {

    }, extraReducers(builder) {
        builder
        .addCase(pullIcecreams.pending, (state, action) => {
            state.pullingStatus = 'loading';
        })
        .addCase(pullIcecreams.fulfilled, (state, action) => {
            state.pullingStatus = 'succeeded';
            let fetched = [];
            for(let key in action.payload) {
                fetched.push(action.payload[key]);
            }
            state.icecreams = fetched;
        })
        .addCase(pullIcecreams.rejected, (state, action) => {
            state.pullingStatus = 'failed';
            state.error = action.error.message
        })
    }
})

export default icecreamsSlice.reducer;