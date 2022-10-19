import React from 'react';
import avatar from '../Images/avatar.png';

import classes from './loginButton.module.css';

function loginButton(props) {
    return (
        <button className={classes.avatar}>
            <img src={avatar} alt=''/>
        </button>
    );
}

export default loginButton;