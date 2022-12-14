import { createSlice } from "@reduxjs/toolkit";

const cartElementsSlice = createSlice({
    name: 'cartElements',
    initialState: {
        cartElements: [],
        counter: 0,
        totalPrice: 0
    }, 

    reducers: {
        ADDTOCART: (state, action) => {
            state.cartElements.push(action.payload);
            state.counter = state.counter + 1;
            state.totalPrice = state.totalPrice + action.payload.price;
        },

        DELETETOCART: (state, action) => {
            state.cartElements.shift(el => el.name === action.payload.name);
            state.totalPrice -= action.payload.price;
            state.counter = state.counter - 1;
        },

        CLEARCART: (state) => {
            state.cartElements = [];
            state.counter = 0;
            state.totalPrice = 0;
        }
    }
});

export const { ADDTOCART, CLEARCART, DELETETOCART } = cartElementsSlice.actions;

export default cartElementsSlice.reducer;