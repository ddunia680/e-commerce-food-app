import React from 'react';

import classes from './dishItem.module.css';
import dishImage from './icon/serving-dish.png';

function dishItem(props) {
    return (
        <div className={classes.mainContainer}>
        <div className={classes.wrapper}>
            <div>
                <img src={dishImage} alt=''/>
            </div>
            <span>{props.name}</span>
        </div>
        </div>
        
    );
}

export default dishItem;