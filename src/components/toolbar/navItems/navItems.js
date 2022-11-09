import React from 'react';
import NavItem from './navItem/navItem';

import classes from './navItems.module.css';
import { useSelector } from 'react-redux';

function NavItems(props) {
    let email = useSelector(state => state.Authenticate.emailAddress);

    // const names = ['Home','Orders', 'About Us', 'Services'];
    return (
            <ul className={classes.navItems}>
                <NavItem name='Home' to='/'/>
                {email === 'ddunia680@gmail.com' ? <NavItem name='Orders' to='/orders'/> : null}
                <NavItem name='About Us' to='/about'/>
                <NavItem name='Services' to='/services'/>
            </ul>
    );
}

export default NavItems;