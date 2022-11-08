import React from 'react';
import NavItem from './navItem/navItem';

import classes from './navItems.module.css';

function navItems(props) {

    // const names = ['Home','Orders', 'About Us', 'Services'];
    return (
            <ul className={classes.navItems}>
                <NavItem name='Home' to='/'/>
                <NavItem name='Orders' to='/orders'/>
                <NavItem name='About Us' to='/about'/>
                <NavItem name='Services' to='/services'/>
            </ul>
    );
}

export default navItems;