import React from 'react';
import SingleArticle from '../../UI/singleArticle/singleArticle';

import classes from './articlesDisplay.module.css';
import icecream from './image/i1.png';
import straw from './image/f1.png';
import chicken from './image/c3.png';
import fish from './image/fi1.png';

function articlesDisplay(props) {

    let articles = [
        {image: icecream, name: 'Icecream', spices: 'Chocolate & vanilla', price: 5.25},
        {image: straw, name: 'Strawberries', spices: 'Fresh Strawberries', price: 10.25},
        {image: chicken, name: 'Chicken Kebab', spices: 'Mixed Kebab Plate', price: 8.25},
        {image: fish, name: 'Fish Kebab', spices: 'Mixed Fish Kebab', price: 5.25}
    ]
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                {articles.map(el => {
                    return <SingleArticle image={el.image} name={el.name} spices={el.spices} price={el.price} key={el.name}/>
                })}
            </div>
        </div>
    );
}

export default articlesDisplay;