import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faCandyCane, faBowlFood, faPizzaSlice, faPepperHot, faUser } from '@fortawesome/free-solid-svg-icons';

import classes from './orderItem.module.css';
const orderItem = (props) => {
    console.log(props.items);

    let extraItems = [];
    for(let item in props.items) {
        extraItems.push({name: item, val: props.items[item]});
    }
    


    return (
        <div className={classes.wrapper}>
            <h3>
                <span><FontAwesomeIcon icon={faUser} /></span>
                Customer {props.name}
            </h3>
            {extraItems.map(el => {
                return <div key={Math.random() * 100}><span><FontAwesomeIcon icon={faBowlFood} /></span>
                <b>{el.name}: </b> {el.val} pieces
            </div>
            })}
            {/* <div><span><FontAwesomeIcon icon={faBowlFood} /></span>
                <b>Chicken Kebab: </b> 3pieces
            </div>
            <div><span><FontAwesomeIcon icon={faPizzaSlice} /></span>
                <b>Chicken Kebab: </b> 3pieces
            </div> */}
            <label className={classes.totalP}><span><FontAwesomeIcon icon={faPepperHot} /></span>
                <b>Total Price: </b> {props.price}$
            </label>
            <button className={classes.proccess}> Process</button>
            <span className={classes.iconProcess}><FontAwesomeIcon icon={faQuestionCircle} /></span> 
        </div>
    );
}

export default orderItem;