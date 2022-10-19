import React from 'react';
import SectionHeader from '../../components/sectionHeader/sectionHeader';
import DishItem from '../../components/dishItem/dishItem';
import FruitItem from '../../components/fruitItem/fruitItem';

import classes from './dishesDisplay.module.css';
import blueberry from './images/f3.png';
import pomegranate from './images/f6.png';
import rasberry from './images/f7.png';
import pinnneapple from './images/f2.png';
import strawberry from './images/f1.png';

function dishesDisplay(props) {

    const fruits = [
        {image: blueberry, name: 'Blue Berries', calories: 80, price: 12},
        {image: pomegranate, name: 'Pomegranate', calories: 120, price: 15},
        {image: rasberry, name: 'Rasperry', calories: 65, price: 20},
        {image: pinnneapple, name: 'Pine Apple', calories: 100, price: 16},
        {image: strawberry, name: 'Strawberries', calories: 100, price: 22}
    ]
    return (
        <div>
            <SectionHeader title='Our Hot Dishes' scrollable={false}/>
            <div className={classes.wrapper}>
                <div className={classes.menuPart}>
                    <DishItem/>
                    <DishItem/>
                    <DishItem/>
                    <DishItem/>
                    <DishItem/>
                    <DishItem/>
                    <DishItem/>
                </div>
            </div>
            <div className={classes.itemsWrapper}>
                {fruits.map(el => {
                    return <FruitItem image={el.image} name={el.name} calories={el.calories} price={el.price} key={el.name}/>
                })}
            </div>
            
            
        </div>
    );
}

export default dishesDisplay;