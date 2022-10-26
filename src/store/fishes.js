import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../axios-orders";


export const pushToFishes = createAsyncThunk(
    'data/pushToFishes',
    (data) => {
        return axios.post('/fishesList.json', data).then(res => {
            console.log(res.data);
            return res.data;
        })
    }
);

export const pullFishes = createAsyncThunk(
    'data/pulledArticles',
    () => {
        return axios.get('/fishesList.json').then(res => {
            // console.log(res.data);
            return res.data;
        })
    }
);

const fishesSlice = createSlice({
    name: 'fishes',
    initialState: {
        fishes : [],
        pullingStatus: '',
        error: ''
        
    },

    reducers: {

    }, extraReducers(builder) {
        builder
        .addCase(pullFishes.pending, (state, action) => {
            state.pullingStatus = 'loading';
        })
        .addCase(pullFishes.fulfilled, (state, action) => {
            state.pullingStatus = 'succeeded';
            let fetched = [];
            for(let key in action.payload) {
                fetched.push(action.payload[key]);
            }
            state.fishes = fetched;
        })
        .addCase(pullFishes.rejected, (state, action) => {
            state.pullingStatus = 'failed';
            state.error = action.error.message;
        })
    }
})

export default fishesSlice.reducer;