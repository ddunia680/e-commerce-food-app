import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faCandyCane, faBowlFood, faPizzaSlice, faPepperHot, faUser } from '@fortawesome/free-solid-svg-icons';

import classes from './orderItem.module.css';
const orderItem = (props) => {
    return (
        <div className={classes.wrapper}>
            <h3>
                <span><FontAwesomeIcon icon={faUser} /></span>
                Customer {props.userName}
            </h3>
            <div><span><FontAwesomeIcon icon={faCandyCane} /></span>
                <b>{props.itemName}: </b> {props.number} pieces
            </div>
            {/* <div><span><FontAwesomeIcon icon={faBowlFood} /></span>
                <b>Chicken Kebab: </b> 3pieces
            </div>
            <div><span><FontAwesomeIcon icon={faPizzaSlice} /></span>
                <b>Chicken Kebab: </b> 3pieces
            </div> */}
            <label className={classes.totalP}><span><FontAwesomeIcon icon={faPepperHot} /></span>
                <b>Total Price: </b> {props.totalPrice}$
            </label>
            <button className={classes.proccess}> Process</button>
            <span className={classes.iconProcess}><FontAwesomeIcon icon={faQuestionCircle} /></span> 
        </div>
    );
}

export default orderItem;