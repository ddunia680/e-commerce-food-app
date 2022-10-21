import React from 'react';

import classes from './dropdown.module.css';
import plus from './icons/plus.png';
import arrowFrame from './icons/arrowFrame.png'

function dropdown(props) {

    // const AddItemClicked = () => {
    //     props.clicked
    // }

    return (
        <div className={classes.wrapper}>
            <div onClick={props.addClicked} className={classes.add}>New Item
                <span><img src={plus} alt=''/></span>
            </div>
            <hr/>
            <div onClick={props.clicked} className={classes.logout}>Logout
                <span><img src={arrowFrame} alt=''/></span>
            </div>
        </div>
    );
}

export default dropdown;