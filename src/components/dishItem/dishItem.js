import React from 'react';

import classes from './dishItem.module.css';
import dishImage from './icon/serving-dish.png';

function dishItem(props) {
    return (
        <div className={classes.mainContainer}>
        <button className={classes.wrapper} onClick={props.clicked}>
            <div>
                <img src={dishImage} alt=''/>
            </div>
            <span>{props.name}</span>
        </button>
        </div>
        
    );
}

export default dishItem;