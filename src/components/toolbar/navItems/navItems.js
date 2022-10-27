import React from 'react';
import NavItem from './navItem/navItem';

import classes from './navItems.module.css';

function navItems(props) {

    const names = ['Home','Menu', 'About Us', 'Services'];
    return (
            <ul className={classes.navItems}>
                {names.map(el => {
                    return <NavItem name={el} key={el}/>
                })}
            </ul>
    );
}

export default navItems;