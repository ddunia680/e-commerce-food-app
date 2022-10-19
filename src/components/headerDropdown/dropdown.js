import React from 'react';

import classes from './dropdown.module.css';
import plus from './icons/plus.png';
import arrowFrame from './icons/arrowFrame.png'

function dropdown(props) {
    return (
        <div className={classes.wrapper}>
            <div>New Item
                <span><img src={plus} alt=''/></span>
            </div>
            <hr/>
            <div>Logout
                <span><img src={arrowFrame} alt=''/></span>
            </div>
        </div>
    );
}

export default dropdown;