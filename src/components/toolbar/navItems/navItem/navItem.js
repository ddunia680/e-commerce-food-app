import React from 'react';
import { NavLink } from 'react-router-dom';

import './navItem.css';

function navItem(props) {
    return (
        <li className='navItem'>
            <NavLink to={props.to}>{props.name}</NavLink>
        </li>
    );
}

export default navItem;