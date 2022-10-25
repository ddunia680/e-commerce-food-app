import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../axios-orders";

export const pullSoftDrinks = createAsyncThunk(
    'data/pulledArticles',
    () => {
        return axios.get('/softDrinks.json').then(res => {
            // console.log(res.data);
            return res.data;
        })
    }
);

const softDrinksSlice = createSlice({
    name: 'softDrinks',
    initialState: {
        softDrinks : [],
        pullingStatus: '',
        error: ''
        
    },

    reducers: {
        ADDNEWDRINK: (state, action) => {
            let type = action.payload.type;
            let data = action.payload.data;
            state.articles[type].push(data);
        }
    }, extraReducers(builder) {
        builder
        .addCase(pullSoftDrinks.pending, (state, action) => {
            state.pullingStatus = 'loading';
        })
        .addCase(pullSoftDrinks.fulfilled, (state, action) => {
            state.pullingStatus = 'succeeded';
            let fetched = [];
            for(let key in action.payload) {
                action.payload[key].map(el => {
                    return fetched.push(el);
                })
            }
            state.softDrinks = fetched;
        })
        .addCase(pullSoftDrinks.rejected, (state, action) => {
            state.pullingStatus = 'failed';
            state.error = action.error.message
        })
    }
})

export const { ADDNEWDRINK } = softDrinksSlice.actions;

export default softDrinksSlice.reducer;