import React from 'react';
import chef1 from './chef1.png';

import classes from './toDisplay.module.css';

function UIHelper() {
    return (
        <div className={classes.wrapper}>
            <img src={chef1} alt=''/>
        </div>
    );
}

export default UIHelper;