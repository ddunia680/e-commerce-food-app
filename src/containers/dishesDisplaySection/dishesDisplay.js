import React, { useState } from 'react';
import SectionHeader from '../../components/sectionHeader/sectionHeader';
import DishItem from '../../components/dishItem/dishItem';
import FruitItem from '../../components/fruitItem/fruitItem';

import classes from './dishesDisplay.module.css';
import { oneChick, twoChick, threeChick, fourChick } from './images/chickens/chickens';
import { oneCur, twoCur, threeCur, fourCur, fiveCur } from './images/Curry/curry';
import { oneFi, twoFi, threeFi, fourFi } from './images/Fish/fishes';
import { oneFr, twoFr, threeFr } from './images/fruits/fruits';
import { oneIc, twoIc, threeIc, fourIc, fiveIc } from './images/Icecreams/icecreams';
import { oneRi, twoRi, threeRi } from './images/Rice/rices';
import { oneSo, twoSo, threeSo, fourSo, fiveSo } from './images/soft_drinks/soft_drinks';


function DishesDisplay(props) {
    let [dishesArray, setDishesArray] = useState([]);
    // console.log(dishesArray);

    const dishes = ['Chicken', 'Curry', 'Rice', 'Fish', 'Fruits', 'Icecreams', 'Soft Drinks'];
    

    const chickens = [
        {image: oneChick, name: 'Broasted Chicken', calories: 80, price: 12.5}, 
        {image: twoChick, name: 'Chicken Kebab Plate', calories: 65, price: 10}, 
        {image: threeChick, name: 'Chicken Kebab', calories: 85, price: 12}, 
        {image: fourChick, name: 'Chicken 65', calories: 80, price: 12.5}
    ];
    const curry = [
        {image: oneCur, name: 'Panner Masala', calories: 100, price: 22.5}, 
        {image: twoCur, name: 'Kadai Chicken', calories: 65, price: 16.5},
        {image: threeCur, name: 'Butter Chicken', calories: 65, price: 18}, 
        {image: fourCur, name: 'Prawn Masala', calories: 65, price: 20}, 
        {image: fiveCur, name: 'Chicken Sauce', calories: 65, price: 17}
    ];
    const fishes = [
        {image: oneFi, name: 'Mer Fruits', calories: 80, price: 25}, 
        {image: twoFi, name: 'Roasted Fish', calories: 85, price: 17.5}, 
        {image: threeFi, name: 'Fish Salad', calories: 75, price: 18}, 
        {image: fourFi, name: 'Sea Fish', calories: 85, price: 18}
    ];
    const fruits = [
        {image: oneFr, name: 'StrawBerries', calories: 85, price: 12}, 
        {image: twoFr, name: 'Pinneapple', calories: 65, price: 12.5}, 
        {image: threeFr, name: 'Blue Berries', calories: 85, price: 12.5}
    ];
    const icecreams = [
        {image: oneIc, name: 'Violet Cream', calories: 85, price: 15}, 
        {image: twoIc, name: 'White Cerise Cream', calories: 85, price: 13.5}, 
        {image: threeIc, name: 'Biscruit Cream', calories: 80, price: 12.5}, 
        {image: fourIc, name: 'Boll Creams', calories: 85, price: 12.5}, 
        {image: fiveIc, name: 'Biscuit Plate Creams', calories: 77, price: 10.5}
    ];
    const rices = [
        {image: oneRi, name: 'Rice Cheese', calories: 55, price: 7.5}, 
        {image: twoRi, name: 'Rice Chicken', calories: 95, price: 20.5}, 
        {image: threeRi, name: 'Pillao Chicken', calories: 95, price: 22.5}
    ];
    const softDrinks = [
        {image: oneSo, name: 'Red Bull', calories: 65, price: 2.5}, 
        {image: twoSo, name: 'Pepsi Canned', calories: 55, price: 2.5}, 
        {image: threeSo, name: 'Monster Energy', calories: 65, price: 2.5}, 
        {image: fourSo, name: 'Juice Cocktail', calories: 85, price: 5.5}, 
        {image: fiveSo, name: 'Sprite Canned', calories: 85, price: 5.5}
    ];

    const displayDishesHandler = (dish) => {
        switch(dish) {
            case 'Chicken' :
                setDishesArray(chickens)
                break;
            case 'Curry' :
                setDishesArray(curry)
                break;
            case 'Rice' :
                setDishesArray(rices)
                break;
            case 'Fish' :
                setDishesArray(fishes)
                break;
            case 'Fruits' :
                setDishesArray(fruits)
                break;
            case 'Icecreams' :
                setDishesArray(icecreams)
                break;
            case 'Soft Drinks' : 
                setDishesArray(softDrinks)
                break;
            default:
                setDishesArray([]);
        }
    }

    // console.log(dishesArray);

    return (
        <div>
            <SectionHeader title='Our Hot Dishes' scrollable={false}/>
            <div className={classes.wrapper}>
                <div className={classes.menuPart}>
                    {dishes.map(dish => 
                                    <DishItem 
                                        name={dish}
                                        key={Math.random()*100} 
                                        clicked={() => 
                                            displayDishesHandler(dish)
                                            }
                                    />
                                )
                    }
                </div>
            </div>
            <div className={classes.itemsWrapper}>
                {dishesArray.map(el => {
                    return <FruitItem image={el.image} name={el.name} calories={el.calories} price={el.price} key={el.name}/>
                })}
            </div>
            
            
        </div>
    );
}

export default DishesDisplay;