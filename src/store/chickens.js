import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../axios-orders";

export const pullChickens = createAsyncThunk(
    'data/pulledArticles',
    () => {
        return axios.get('/chickens.json').then(res => {
            console.log(res.data);
            return res.data;
        })
    }
);

const chickensSlice = createSlice({
    name: 'chickens',
    initialState: {
        chickens : [],
        pullingStatus: '',
        error: ''
        
    },

    reducers: {
        ADDNEWCHICKEN: (state, action) => {
            let type = action.payload.type;
            let data = action.payload.data;
            state.articles[type].push(data);
        }
    }, extraReducers(builder) {
        builder
        .addCase(pullChickens.pending, (state, action) => {
            state.pullingStatus = 'loading';
        })
        .addCase(pullChickens.fulfilled, (state, action) => {
            state.pullingStatus = 'succeeded';
            let fetched = [];
            for(let key in action.payload) {
                action.payload[key].map(el => {
                    return fetched.push(el);
                })
            }
            state.chickens = fetched;
        })
        .addCase(pullChickens.rejected, (state, action) => {
            state.pullingStatus = 'failed';
            state.error = action.error.message;
        })
    }
});

export const { ADDNEWCHICKEN } = chickensSlice.actions;

export default chickensSlice.reducer;