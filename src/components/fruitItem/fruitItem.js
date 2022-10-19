import React from 'react';

import classes from './fruitItem.module.css';
import backet from './images/backet.jpg';

function fruitItem(props) {
    return (
        <div className={classes.mainContainer}>
        <div className={classes.wrapper}>
            <div className={classes.fruitDiv}>
                <img src={props.image} alt=''/>
            </div>
            <div className={classes.info}>
                <div>
                    <img src={backet} alt=''/>
                </div>
                <h3 className={classes.name}>{props.name}</h3>
                <h3 className={classes.calories}>{props.calories} Calories</h3>
                <h3 className={classes.price}><span>$ </span>{props.price}</h3>
            </div>
        </div>
        </div>
    );
}

export default fruitItem;