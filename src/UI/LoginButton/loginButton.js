import React from 'react';
import avatar from '../Images/avatar.png';

import classes from './loginButton.module.css';

function loginButton(props) {
    return (
        <button className={classes.avatar}>
            <img src={avatar} alt='' onClick={props.clicked}/>
        </button>
    );
}

export default loginButton;