import { configureStore } from "@reduxjs/toolkit";
import cartElements from "./cartElements";
import articles from "./articles";

const store = configureStore({
    reducer: {
        cartElements: cartElements,
        articles: articles
    }, 
});

export default store;