import React from 'react';

import classes from './cartButton.module.css';
import cartIcon from '../icons/shopingIcon.png';

function cartButton(props) {
    return (
            <button className={classes.cart}>
                <img src={cartIcon} alt=''/>
                <span className={classes.badge}>1</span>
            </button>
            
    );
}

export default cartButton;