import { configureStore } from "@reduxjs/toolkit";
import cartElements from "./cartElements";
import chickensSlice from "./chickens";
import curriesSlice from "./curries";
import fishesSlice from "./fishes";
import fruitsSlice from "./fruits";
import icecreamsSlice from "./icecreams";
import ricesSlice from "./rices";
import softDrinksSlice from "./softDrinks";

const store = configureStore({
    reducer: {
        cartElements: cartElements,
        chickens: chickensSlice,
        curries: curriesSlice,
        fishes: fishesSlice,
        fruits: fruitsSlice,
        icecreams: icecreamsSlice,
        rices: ricesSlice,
        softDrinks: softDrinksSlice
    }, 
});

export default store;