import React from 'react';

import classes from './control.module.css';
// import straw from './images/f3.png';

function control(props) {
    return (
        <div className={classes.wrapper}>
            <img src={props.image} alt='' />
            <div className={classes.name}>
                <h4>{props.name}</h4>
                <h4>$ {props.price}</h4>
            </div>
            <div className={classes.control}>
                <button onClick={props.addNewEl}>+</button>
                <div>{props.count}</div>
                <button onClick={props.deleteEl}>-</button>
            </div>
        </div>
    );
}

export default control;