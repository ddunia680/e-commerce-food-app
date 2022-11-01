import React from 'react';
import { useDispatch} from 'react-redux';
import { ADDTOCART } from '../../store/cartElements';

import classes from './fruitItem.module.css';
import backet from './images/backet.jpg';

function FruitItem(props) {
    const dispatch = useDispatch();

    const data = {
        image: props.image,
        name: props.name,
        calories: props.calories,
        price: props.price,
        id: props.id
    }
    return (
        <div className={classes.mainContainer}>
        <div className={classes.wrapper}>
            <div className={classes.fruitDiv}>
                <img src={props.image} alt=''/>
            </div>
            <div className={classes.info}>
                <div>
                    <img 
                        src={backet} alt='' 
                        title='Click to ad to cart'
                        onClick={() => dispatch(ADDTOCART(data))}
                    />
                </div>
                <h3 className={classes.name}>{props.name}</h3>
                <h3 className={classes.calories}>{props.calories} Calories</h3>
                <h3 className={classes.price}><span>$ </span>{props.price}</h3>
            </div>
        </div>
        </div>
    );
}

export default FruitItem;