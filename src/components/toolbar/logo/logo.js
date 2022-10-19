import React from 'react';

import classes from './logo.module.css';
import logoPic from './logo.png';

function logo(props) {
    return (
        <div className={classes.logoWrapper}>
            <img src={logoPic} alt='logo'/>
            <div className={classes.word}>City</div>
        </div>
    );
}

export default logo;