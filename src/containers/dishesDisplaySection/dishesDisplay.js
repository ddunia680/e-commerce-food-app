import React from 'react';
import SectionHeader from '../../components/sectionHeader/sectionHeader';
import DishItem from '../../components/dishItem/dishItem';
import FruitItem from '../../components/fruitItem/fruitItem';

import classes from './dishesDisplay.module.css';
// import {f1, f2, f3 } from './images/fruits';
// import { c1, c2, c3, c4 } from './images/chickens';
// import { cu1, cu2, cu3, cu4, cu5 } from './images/Curry';
// import { r1, r2, r3 } from './images/Rice';
// import { fi1, fi2, fi3, fi4 } from './images/Fish';
// import { i1, i2, i3, i4, i5 } from './images/Icecreams';



function dishesDisplay(props) {

    const dishes = ['Chicken', 'Curry', 'Rice', 'Fish', 'Fruits', 'Icecreams', 'Soft Drinks']

    // const fruits = [
    //     {image: f1, name: 'Blue Berries', calories: 80, price: 12},
    //     {image: f2, name: 'Pine Apple', calories: 100, price: 16},
    //     {image: f3, name: 'Strawberries', calories: 100, price: 22}
    // ]

    // const curry = [
    //     {image: cu1, name: 'Blue Berries', calories: 80, price: 12},
    //     {image: cu2, name: 'Pomegranate', calories: 120, price: 15},
    //     {image: cu3, name: 'Rasperry', calories: 65, price: 20},
    //     {image: cu4, name: 'Pine Apple', calories: 100, price: 16},
    //     {image: cu5, name: 'Strawberries', calories: 100, price: 22}
    // ]

    // const chicken = [
    //     {image: c1, name: 'Broasted Chicken', calories: 80, price: 12.5},
    //     {image: c2, name: 'Chicken Kebab Plate', calories: 65, price: 10},
    //     {image: c3, name: 'Chicken Kebab', calories: 85, price: 12},
    //     {image: c4, name: 'Chicken 65', calories: 80, price: 12.5}
    // ]

    // const Rice = [
    //     {image: r1, name: 'Blue Berries', calories: 80, price: 12},
    //     {image: r2, name: 'Pomegranate', calories: 120, price: 15},
    //     {image: r3, name: 'Rasperry', calories: 65, price: 20},
    // ]

    // const Fish = [
    //     {image: fi1, name: 'Blue Berries', calories: 80, price: 12},
    //     {image: fi2, name: 'Pomegranate', calories: 120, price: 15},
    //     {image: fi3, name: 'Rasperry', calories: 65, price: 20},
    //     {image: fi4, name: 'Rasperry', calories: 65, price: 20}
    // ]

    // const Icecreams = [
    //     {image: i1, name: 'Blue Berries', calories: 80, price: 12},
    //     {image: i2, name: 'Pomegranate', calories: 120, price: 15},
    //     {image: i3, name: 'Rasperry', calories: 65, price: 20},
    //     {image: i4, name: 'Rasperry', calories: 65, price: 20},
    //     {image: i5, name: 'Rasperry', calories: 65, price: 20}
    // ]

    return (
        <div>
            <SectionHeader title='Our Hot Dishes' scrollable={false}/>
            <div className={classes.wrapper}>
                <div className={classes.menuPart}>
                    {dishes.map(dish => <DishItem name={dish}/>)}
                </div>
            </div>
            {/* <div className={classes.itemsWrapper}>
                {fruits.map(el => {
                    return <FruitItem image={el.image} name={el.name} calories={el.calories} price={el.price} key={el.name}/>
                })}
            </div> */}
            
            
        </div>
    );
}

export default dishesDisplay;