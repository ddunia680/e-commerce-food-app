import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../axios-orders";


export const pushToSoftDrinks = createAsyncThunk(
    'data/pushToSoftDrinks',
    (data) => {
        return axios.post('/softDrinksList.json', data).then(res => {
            console.log(res.data);
            return res.data;
        })
    }
);

export const pullSoftDrinks = createAsyncThunk(
    'data/pulledArticles',
    () => {
        return axios.get('/softDrinksList.json').then(res => {
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
    }, extraReducers(builder) {
        builder
        .addCase(pullSoftDrinks.pending, (state, action) => {
            state.pullingStatus = 'loading';
        })
        .addCase(pullSoftDrinks.fulfilled, (state, action) => {
            state.pullingStatus = 'succeeded';
            let fetched = [];
            for(let key in action.payload) {
                fetched.push(action.payload[key]);
            }
            state.softDrinks = fetched;
        })
        .addCase(pullSoftDrinks.rejected, (state, action) => {
            state.pullingStatus = 'failed';
            state.error = action.error.message
        })
    }
})

export default softDrinksSlice.reducer;