import React from 'react';
import NavItem from './navItem/navItem';

import classes from './navItems.module.css';

function navItems(props) {
    return (
            <ul className={classes.navItems}>
                <NavItem name='Home'/>
                <NavItem name='Menu'/>
                <NavItem name='About Us'/>
                <NavItem name='Services'/>
            </ul>
    );
}

export default navItems;