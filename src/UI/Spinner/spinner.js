import React from 'react';

import classes from './spinner.module.css';
function spinner() {
    return (
        <div className={classes.ldsSpinner}>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
    );
}

export default spinner;