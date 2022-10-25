import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../axios-orders";

export const pullRices = createAsyncThunk(
    'data/pulledArticles',
    () => {
        return axios.get('/rices.json').then(res => {
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
        ADDNEWRICE: (state, action) => {
            let type = action.payload.type;
            let data = action.payload.data;
            state.articles[type].push(data);
        }
    }, extraReducers(builder) {
        builder
        .addCase(pullRices.pending, (state, action) => {
            state.pullingStatus = 'loading';
        })
        .addCase(pullRices.fulfilled, (state, action) => {
            state.pullingStatus = 'succeeded';
            let fetched = [];
            for(let key in action.payload) {
                action.payload[key].map(el => {
                    return fetched.push(el);
                })
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