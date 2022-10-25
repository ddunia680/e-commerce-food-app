import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../axios-orders";

export const pullFruits = createAsyncThunk(
    'data/pulledFruits',
    () => {
        return axios.get('/fruits.json').then(res => {
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
        ADDNEWFRUIT: (state, action) => {
            let type = action.payload.type;
            let data = action.payload.data;
            state.articles[type].push(data);
        }
    }, extraReducers(builder) {
        builder
        .addCase(pullFruits.pending, (state, action) => {
            state.pullingStatus = 'loading';
        })
        .addCase(pullFruits.fulfilled, (state, action) => {
            state.pullingStatus = 'succeeded';
            let raw = action.payload;
            let fetchedArticles = [];
            for (let key in raw) {
                fetchedArticles.push(raw[key]);
            };
            state.fruits = fetchedArticles[0];
        })
        .addCase(pullFruits.rejected, (state, action) => {
            state.pullingStatus = 'failed';
            state.error = action.error.message
        })
    }
})

export const { ADDNEWFRUIT } = fruitsSlice.actions;

export default fruitsSlice.reducer;