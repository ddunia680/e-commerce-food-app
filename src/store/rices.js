import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../axios-orders";


export const pushToRices = createAsyncThunk(
    'data/pushToRices',
    (data) => {
        return axios.post('/ricesList.json', data).then(res => {
            console.log(res.data);
            return res.data;
        })
    }
);

export const pullRices = createAsyncThunk(
    'data/pulledArticles',
    () => {
        return axios.get('/ricesList.json').then(res => {
            // console.log(res.data);
            return res.data;
        })
    }
);

const ricesSlice = createSlice({
    name: 'rices',
    initialState: {
        rices : [],
        pullingStatus: '',
        error: ''
        
    },

    reducers: {
    }, extraReducers(builder) {
        builder
        .addCase(pullRices.pending, (state, action) => {
            state.pullingStatus = 'loading';
        })
        .addCase(pullRices.fulfilled, (state, action) => {
            state.pullingStatus = 'succeeded';
            let fetched = [];
            for(let key in action.payload) {
                fetched.push(action.payload[key]);
            }
            state.rices = fetched;
        })
        .addCase(pullRices.rejected, (state, action) => {
            state.pullingStatus = 'failed';
            state.error = action.error.message
        })
    }
})

export const { ADDNEWRICE } = ricesSlice.actions;

export default ricesSlice.reducer;