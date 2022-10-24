import { createSlice } from "@reduxjs/toolkit";
import { oneChick, twoChick, threeChick, fourChick } from '../containers/dishesDisplaySection/images/chickens/chickens';
import { oneCur, twoCur, threeCur, fourCur, fiveCur } from '../containers/dishesDisplaySection/images/Curry/curry';
import { oneFi, twoFi, threeFi, fourFi } from '../containers/dishesDisplaySection/images/Fish/fishes';
import { oneFr, twoFr, threeFr } from '../containers/dishesDisplaySection/images/fruits/fruits';
import { oneIc, twoIc, threeIc, fourIc, fiveIc } from '../containers/dishesDisplaySection/images/Icecreams/icecreams';
import { oneRi, twoRi, threeRi } from '../containers/dishesDisplaySection/images/Rice/rices';
import { oneSo, twoSo, threeSo, fourSo, fiveSo } from '../containers/dishesDisplaySection/images/soft_drinks/soft_drinks';

const ArticlesSlice = createSlice({
    name: 'articles',
    initialState: {
        articles : {
            chickens: [
                {image: oneChick, name: 'Broasted Chicken', calories: 80, price: 12.5, id: 200}, 
                {image: twoChick, name: 'Chicken Kebab Plate', calories: 65, price: 10, id: 201}, 
                {image: threeChick, name: 'Chicken Kebab', calories: 85, price: 12, id: 202}, 
                {image: fourChick, name: 'Chicken 65', calories: 80, price: 12.5, id: 203}
            ],
            curries: [
                {image: oneCur, name: 'Panner Masala', calories: 100, price: 22.5, id: 300}, 
                {image: twoCur, name: 'Kadai Chicken', calories: 65, price: 16.5, id: 301},
                {image: threeCur, name: 'Butter Chicken', calories: 65, price: 18, id: 302}, 
                {image: fourCur, name: 'Prawn Masala', calories: 65, price: 20, id: 303}, 
                {image: fiveCur, name: 'Chicken Sauce', calories: 65, price: 17, id: 304}
            ],
            fishes: [
                {image: oneFi, name: 'Mer Fruits', calories: 80, price: 25, id: 400}, 
                {image: twoFi, name: 'Roasted Fish', calories: 85, price: 17.5, id: 401}, 
                {image: threeFi, name: 'Fish Salad', calories: 75, price: 18, id: 402}, 
                {image: fourFi, name: 'Sea Fish', calories: 85, price: 18, id: 403}
            ],
           fruits: [
                {image: oneFr, name: 'StrawBerries', calories: 85, price: 12, id: 500}, 
                {image: twoFr, name: 'Pinneapple', calories: 65, price: 12.5, id: 501}, 
                {image: threeFr, name: 'Blue Berries', calories: 85, price: 12.5, id: 502}
            ],
            icecreams: [
                {image: oneIc, name: 'Violet Cream', calories: 85, price: 15, id: 600}, 
                {image: twoIc, name: 'White Cerise Cream', calories: 85, price: 13.5, id: 601}, 
                {image: threeIc, name: 'Biscruit Cream', calories: 80, price: 12.5, id: 602}, 
                {image: fourIc, name: 'Boll Creams', calories: 85, price: 12.5, id: 603}, 
                {image: fiveIc, name: 'Biscuit Plate Creams', calories: 77, price: 10.5, id: 604}
            ],
            rices: [
                {image: oneRi, name: 'Rice Cheese', calories: 55, price: 7.5, id: 700}, 
                {image: twoRi, name: 'Rice Chicken', calories: 95, price: 20.5, id: 701}, 
                {image: threeRi, name: 'Pillao Chicken', calories: 95, price: 22.5, id: 702}
            ],
            softDrinks: [
                {image: oneSo, name: 'Red Bull', calories: 65, price: 2.5, id: 800}, 
                {image: twoSo, name: 'Pepsi Canned', calories: 55, price: 2.5, id: 801}, 
                {image: threeSo, name: 'Monster Energy', calories: 65, price: 2.5, id: 802}, 
                {image: fourSo, name: 'Juice Cocktail', calories: 85, price: 5.5, id: 803}, 
                {image: fiveSo, name: 'Sprite Canned', calories: 85, price: 5.5, id: 804}
            ]
        }
        
    },

    reducers: {
        ADDNEWARTICLE: (state, action) => {
            let type = action.payload.type;
            let data = action.payload.data;
            state.articles[type].push(data);
        }
    }
})

export const { ADDNEWARTICLE } = ArticlesSlice.actions;

export default ArticlesSlice.reducer;