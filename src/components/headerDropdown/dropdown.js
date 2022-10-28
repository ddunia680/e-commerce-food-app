import React from 'react';
import NavItem from '../toolbar/navItems/navItem/navItem';

import classes from './dropdown.module.css';
import plus from './icons/plus.png';
import arrowFrame from './icons/arrowFrame.png'

function dropdown(props) {

    const names = ['Home','Menu', 'About Us', 'Services'];

    let navItems = names.map(el => {
        return <NavItem name={el} key={el} />
    });
    return (
        <>
        <div className={classes.wrapper1}>
            <div onClick={props.addClicked} className={classes.add}>New Item
                <span><img src={plus} alt=''/></span>
            </div>
            <hr/>
            <div onClick={props.clicked} className={classes.logout}>Logout
                <span><img src={arrowFrame} alt=''/></span>
            </div>
        </div>
        <div className={classes.wrapper2}>
            <div onClick={props.addClicked} className={classes.add}>New Item
                    <span><img src={plus} alt=''/></span>
            </div>
            {navItems}
            <div onClick={props.clicked} className={classes.logout}>
                Logout
                <span><img src={arrowFrame} alt=''/></span>
            </div>
              
        </div>
        </>
    );
}

export default dropdown;