import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../axios-orders";

export const pullIcecreams = createAsyncThunk(
    'data/pulledArticles',
    () => {
        return axios.get('/icecreams.json').then(res => {
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
        ADDNEWICECREAM: (state, action) => {
            let type = action.payload.type;
            let data = action.payload.data;
            state.articles[type].push(data);
        }
    }, extraReducers(builder) {
        builder
        .addCase(pullIcecreams.pending, (state, action) => {
            state.pullingStatus = 'loading';
        })
        .addCase(pullIcecreams.fulfilled, (state, action) => {
            state.pullingStatus = 'succeeded';
            let fetched = [];
            for(let key in action.payload) {
                action.payload[key].map(el => {
                    return fetched.push(el);
                })
            }
            state.icecreams = fetched;
        })
        .addCase(pullIcecreams.rejected, (state, action) => {
            state.pullingStatus = 'failed';
            state.error = action.error.message
        })
    }
})

export const { ADDNEWICECREAM } = icecreamsSlice.actions;

export default icecreamsSlice.reducer;