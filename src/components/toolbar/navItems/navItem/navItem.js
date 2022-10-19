import React from 'react';

import classes from './navItem.module.css';

function navItem(props) {
    return (
        <li className={classes.navItem}>
            <a href='#'>{props.name}</a>
        </li>
    );
}

export default navItem;