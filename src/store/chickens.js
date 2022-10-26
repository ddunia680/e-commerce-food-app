import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../axios-orders";


export const pushToChickens = createAsyncThunk(
    'data/pushToChickens',
    (data) => {
        return axios.post('/chickensList.json', data).then(res => {
            console.log(res.data);
            return res.data;
        })
    }
);
export const pullChickens = createAsyncThunk(
    'data/pulledArticles',
    () => {
        return axios.get('/chickensList.json').then(res => {
            // console.log(res.data);
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
 
    }, extraReducers(builder) {
        builder
        .addCase(pullChickens.pending, (state, action) => {
            state.pullingStatus = 'loading';
        })
        .addCase(pullChickens.fulfilled, (state, action) => {
            state.pullingStatus = 'succeeded';
            let fetched = [];
            for(let key in action.payload) {
                fetched.push(action.payload[key]);
            }
            state.chickens = fetched;
        })
        .addCase(pullChickens.rejected, (state, action) => {
            state.pullingStatus = 'failed';
            state.error = action.error.message;
        })
    }
});

export default chickensSlice.reducer;