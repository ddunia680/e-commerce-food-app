import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../axios-orders";

export const pushToCurries = createAsyncThunk(
    'data/pushToCurries',
    (data) => {
        return axios.post('/curriesList.json', data).then(res => {
            console.log(res.data);
            return res.data;
        })
    }
);

export const pullCurries = createAsyncThunk(
    'data/pulledArticles',
    () => {
        return axios.get('/curriesList.json').then(res => {
            // console.log(res.data);
            return res.data;
        })
    }
);

const curriesSlice = createSlice({
    name: 'curries',
    initialState: {
        curries : [],
        pullingStatus: '',
        error: ''
        
    },

    reducers: {

    }, extraReducers(builder) {
        builder
        .addCase(pullCurries.pending, (state, action) => {
            state.pullingStatus = 'loading';
        })
        .addCase(pullCurries.fulfilled, (state, action) => {
            state.pullingStatus = 'succeeded';
            let fetched = [];
            for(let key in action.payload) {
                fetched.push(action.payload[key]);
            }
            state.curries = fetched;
        })
        .addCase(pullCurries.rejected, (state, action) => {
            state.pullingStatus = 'failed';
            state.error = action.error.message
        })
    }
})

export default curriesSlice.reducer;