import React from 'react';

import classes from './cartButton.module.css';
import cartIcon from '../icons/shopingIcon.png';
import { useSelector } from 'react-redux';

function CartButton(props) {
    const counter = useSelector(state => state.cartElements.counter);
    return (
            <button className={classes.cart} onClick={props.clicked}>
                <img src={cartIcon} alt=''/>
                {counter !== 0 ? <span className={classes.badge}>{counter}</span> : null}
            </button>
            
    );
}

export default CartButton;