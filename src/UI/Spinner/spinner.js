import React from 'react';

import classes from './spinner.module.css';
function spinner() {
    return (
        <div className={classes.loadingSpinner}></div>
    );
}

export default spinner;