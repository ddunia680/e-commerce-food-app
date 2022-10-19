import { configureStore } from "@reduxjs/toolkit";
import cartElements from "./cartElements";

const store = configureStore({
    reducer: {
        cartElements: cartElements
    }, 
});

export default store;