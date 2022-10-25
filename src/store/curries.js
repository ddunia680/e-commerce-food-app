import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../axios-orders";

export const pullCurries = createAsyncThunk(
    'data/pulledArticles',
    () => {
        return axios.get('/curries.json').then(res => {
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
        ADDNEWCURRY: (state, action) => {
            let type = action.payload.type;
            let data = action.payload.data;
            state.articles[type].push(data);
        }
    }, extraReducers(builder) {
        builder
        .addCase(pullCurries.pending, (state, action) => {
            state.pullingStatus = 'loading';
        })
        .addCase(pullCurries.fulfilled, (state, action) => {
            state.pullingStatus = 'succeeded';
            let fetched = [];
            for(let key in action.payload) {
                action.payload[key].map(el => {
                    return fetched.push(el);
                })
            }
            state.curries = fetched;
        })
        .addCase(pullCurries.rejected, (state, action) => {
            state.pullingStatus = 'failed';
            state.error = action.error.message
        })
    }
})

export const { ADDNEWCURRY } = curriesSlice.actions;

export default curriesSlice.reducer;