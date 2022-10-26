import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SectionHeader from '../../components/sectionHeader/sectionHeader';
import FruitItem from '../../components/fruitItem/fruitItem';
import Spinner from '../../UI/Spinner/spinner';

import classes from './fruitsDisplay.module.css';
import { pullFruits } from '../../store/fruits';

function FruitDisplay() {
    const [scrollX, setScrollX] = useState(0);
    const [scrollEnd, setScrollEnd] = useState(false);
    let pullingStatus = useSelector(state => state.fruits.pullingStatus);
    let fruits = useSelector(state => state.fruits.fruits);
    let dispatch = useDispatch();
    // console.log(fruits);
    // console.log(pullingStatus);
    let scrl = useRef();

    useEffect(() => {
        dispatch(pullFruits());
    }, []);

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

    let items;
    if(pullingStatus === 'loading') {
        items = <Spinner/>
    } else {
        items = fruits.map(el => {
            return <FruitItem image={el.image} name={el.name} calories={el.calories} price={el.price} key={el.id} id={el.id}/>
        });
    }
    return (
        <div>
            <SectionHeader 
                title={'Our Fresh & Healthy Fruits'} 
                scrollable={true} 
                left={() => slide(-500)} 
                right={() => slide(500)}
                scrollx={scrollX}
                scrollend={scrollEnd}
            />


            <div className={classes.container} ref={scrl}>
                {items} 
            </div>
        </div>
    );
}

export default FruitDisplay;