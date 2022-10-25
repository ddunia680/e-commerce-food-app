import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../axios-orders";

export const pullArticles = createAsyncThunk(
    'data/pulledArticles',
    () => {
        return axios.get('/articles.json').then(res => {
            // console.log(res.data);
            return res.data;
        })
    }
);

const ArticlesSlice = createSlice({
    name: 'articles',
    initialState: {
        articles : [],
        pullingStatus: '',
        error: ''
        
    },

    reducers: {
        ADDNEWARTICLE: (state, action) => {
            let type = action.payload.type;
            let data = action.payload.data;
            state.articles[type].push(data);
        }
    }, extraReducers(builder) {
        builder
        .addCase(pullArticles.pending, (state, action) => {
            state.pullingStatus = 'loading';
        })
        .addCase(pullArticles.fulfilled, (state, action) => {
            state.pullingStatus = 'succeeded';
            let row = action.payload;
            let fetchedArticles = [];
            for (let key in row) {
                fetchedArticles.push(row[key]);
            };
            state.articles = fetchedArticles;
        })
        .addCase(pullArticles.rejected, (state, action) => {
            state.pullingStatus = 'failed';
            state.error = action.error.message
        })
    }
})

export const { ADDNEWARTICLE } = ArticlesSlice.actions;

export default ArticlesSlice.reducer;