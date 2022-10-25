import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../axios-orders";

export const pullFishes = createAsyncThunk(
    'data/pulledArticles',
    () => {
        return axios.get('/fishes.json').then(res => {
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
        ADDNEWFISH: (state, action) => {
            let type = action.payload.type;
            let data = action.payload.data;
            state.articles[type].push(data);
        }
    }, extraReducers(builder) {
        builder
        .addCase(pullFishes.pending, (state, action) => {
            state.pullingStatus = 'loading';
        })
        .addCase(pullFishes.fulfilled, (state, action) => {
            state.pullingStatus = 'succeeded';
            let fetched = [];
            for(let key in action.payload) {
                action.payload[key].map(el => {
                    return fetched.push(el);
                })
            }
            state.fishes = fetched;
        })
        .addCase(pullFishes.rejected, (state, action) => {
            state.pullingStatus = 'failed';
            state.error = action.error.message;
        })
    }
})

export const { ADDNEWFISH } = fishesSlice.actions;

export default fishesSlice.reducer;