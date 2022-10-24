import React, { useState } from 'react';
import SectionHeader from '../../components/sectionHeader/sectionHeader';
import DishItem from '../../components/dishItem/dishItem';
import FruitItem from '../../components/fruitItem/fruitItem';

import classes from './dishesDisplay.module.css';
import { useSelector } from 'react-redux';


function DishesDisplay(props) {
    let [dishesArray, setDishesArray] = useState([]);
    let articles = useSelector(state => state.articles.articles);

    const dishes = ['Chicken', 'Curry', 'Rice', 'Fish', 'Fruits', 'Icecreams', 'Soft Drinks'];
    
    const displayDishesHandler = (dish) => {
        switch(dish) {
            case 'Chicken' :
                setDishesArray(articles.chickens)
                break;
            case 'Curry' :
                setDishesArray(articles.curries)
                break;
            case 'Rice' :
                setDishesArray(articles.rices)
                break;
            case 'Fish' :
                setDishesArray(articles.fishes)
                break;
            case 'Fruits' :
                setDishesArray(articles.fruits)
                break;
            case 'Icecreams' :
                setDishesArray(articles.icecreams)
                break;
            case 'Soft Drinks' : 
                setDishesArray(articles.softDrinks)
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
                    return <FruitItem image={el.image} name={el.name} calories={el.calories} price={el.price} key={el.id} id={el.id}/>
                })}
            </div>
            
            
        </div>
    );
}

export default DishesDisplay;