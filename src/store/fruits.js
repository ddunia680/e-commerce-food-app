import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../axios-orders";


export const pushToFruits = createAsyncThunk(
    'data/pushToFruits',
    (data) => {
        return axios.post('/fruitsList.json', data).then(res => {
            console.log(res.data);
            return res.data;
        })
    }
);

export const pullFruits = createAsyncThunk(
    'data/pulledFruits',
    () => {
        return axios.get('/fruitsList.json').then(res => {
            // console.log(res.data);
            return res.data;
        })
    }
);

const fruitsSlice = createSlice({
    name: 'fruits',
    initialState: {
        fruits : [],
        pullingStatus: '',
        error: ''
        
    },

    reducers: {
    }, extraReducers(builder) {
        builder
        .addCase(pullFruits.pending, (state, action) => {
            state.pullingStatus = 'loading';
        })
        .addCase(pullFruits.fulfilled, (state, action) => {
            state.pullingStatus = 'succeeded';
            let fetched = [];
            for(let key in action.payload) {
                fetched.push(action.payload[key]);
            }
            state.fruits = fetched;
            // console.log(fetched);
        })
        .addCase(pullFruits.rejected, (state, action) => {
            state.pullingStatus = 'failed';
            state.error = action.error.message
        })
    }
})

export default fruitsSlice.reducer;