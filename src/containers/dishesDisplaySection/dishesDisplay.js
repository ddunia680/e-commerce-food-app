import React, { useState } from 'react';
import SectionHeader from '../../components/sectionHeader/sectionHeader';
import DishItem from '../../components/dishItem/dishItem';
import FruitItem from '../../components/fruitItem/fruitItem';

import classes from './dishesDisplay.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { pullChickens } from '../../store/chickens';
import { pullCurries } from '../../store/curries';
import { pullRices } from '../../store/rices';
import { pullFishes } from '../../store/fishes';
import { pullIcecreams } from '../../store/icecreams';
import { pullSoftDrinks } from '../../store/softDrinks';


function DishesDisplay() {
    let [dishesArray, setDishesArray] = useState([]);
    let dispatch = useDispatch();
    let chickens = useSelector(state => state.chickens.chickens);
    let curries = useSelector(state => state.curries.curries);
    let fishes = useSelector(state => state.fishes.fishes);
    let icecreams = useSelector(state => state.icecreams.icecreams);
    let rices = useSelector(state => state.rices.rices);
    let softDrinks = useSelector(state => state.softDrinks.softDrinks);

    const dishes = ['Chicken', 'Curry', 'Rice', 'Fish', 'Icecreams', 'Soft Drinks'];

    // console.log(dishesArray);
    
    const displayDishesHandler = (dish) => {
        switch(dish) {
            case 'Chicken' :
                setDishesArray(chickens);
                dispatch(pullChickens());
                break;
            case 'Curry' :
                dispatch(pullCurries());
                setDishesArray(curries);
                break;
            case 'Rice' :
                dispatch(pullRices());
                setDishesArray(rices);
                break;
            case 'Fish' :
                dispatch(pullFishes());
                setDishesArray(fishes);
                break;
            case 'Icecreams' :
                dispatch(pullIcecreams());
                setDishesArray(icecreams);
                break;
            case 'Soft Drinks' :
                dispatch(pullSoftDrinks());
                setDishesArray(softDrinks);
                break;
            default:
                setDishesArray([]);
                break;
        }
    }

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
                {chickens.map(el => {
                    return <FruitItem image={el.image} name={el.name} calories={el.calories} price={el.price} key={el.id} id={el.id}/>
                })}
            </div>
            
            
        </div>
    );
}

export default DishesDisplay;