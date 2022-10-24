import React, { useRef, useState } from 'react';
// import { useSelector } from 'react-redux';
import SectionHeader from '../../components/sectionHeader/sectionHeader';
import FruitItem from '../../components/fruitItem/fruitItem';

import classes from './fruitsDisplay.module.css';
import blueberry from './images/f3.png';
import pomegranate from './images/f6.png';
import rasberry from './images/f7.png';
import pinnneapple from './images/f2.png';
import strawberry from './images/f1.png';

function FruitDisplay(props) {
    const [scrollX, setScrollX] = useState(0);
    const [scrollEnd, setScrollEnd] = useState(false);
    // let fruits = useSelector(state => state.articles.articles.fruits);
    let scrl = useRef();

    const fruits = [
        {image: blueberry, name: 'Blue Berries', calories: 80, price: 12, id: 100},
        {image: pomegranate, name: 'Pomegranate', calories: 120, price: 15, id: 101},
        {image: rasberry, name: 'Rasperry', calories: 65, price: 20, id: 102},
        {image: pinnneapple, name: 'Pine Apple', calories: 100, price: 16, id: 103},
        {image: strawberry, name: 'Strawberries', calories: 100, price: 22, id: 104}
    ]

    const slide = (shift) => {
        scrl.current.scrollLeft += shift;
        setScrollX(scrollX + shift);

        if(
            Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
            scrl.current.offsetWidth
        ) {
            setScrollEnd(true);
        } else {
            setScrollEnd(false);
        }
    }
    return (
        <div>
            <SectionHeader 
                title={'Our Fresh & Healthy Fruits'} 
                scrollable={true} 
                left={() => slide(-50)} 
                right={() => slide(50)}
                scrollx={scrollX}
                scrollend={scrollEnd}
            />


            <div className={classes.container} ref={scrl}>
                {fruits.map(el => {
                    return <FruitItem image={el.image} name={el.name} calories={el.calories} price={el.price} key={el.id} id={el.id}/>
                })} 
            </div>
        </div>
    );
}

export default FruitDisplay;