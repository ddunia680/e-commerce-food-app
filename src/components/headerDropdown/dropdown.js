import React from 'react';
import NavItem from '../toolbar/navItems/navItem/navItem';

import { signOut } from 'firebase/auth';

import classes from './dropdown.module.css';
import plus from './icons/plus.png';
import arrowFrame from './icons/arrowFrame.png';

import { LOGUSEROUT } from '../../store/authentication';
import { Authenticate } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';

function Dropdown(props) {
    let dispatch = useDispatch();
    let email = useSelector(state => state.Authenticate.emailAddress);
    const names = ['Home','Menu', 'About Us', 'Services'];

    let navItems = names.map(el => {
        return <NavItem name={el} key={el} />
    });

    const LogoutHandler = () => {
        props.clicked();
        signOut(Authenticate);
        dispatch(LOGUSEROUT());
        console.log('User Logged Out');
    }

    return (
        <>
        <div className={classes.wrapper1}>
            { email === 'ddunia680@gmail.com' ?<><div onClick={props.addClicked} className={classes.add}>New Item
                <span><img src={plus} alt=''/></span>
            </div> 
            <hr/>
            </>
            : null}
            <div onClick={LogoutHandler} className={classes.logout}>Logout
                <span><img src={arrowFrame} alt=''/></span>
            </div>
        </div>
        <div className={classes.wrapper2}>
            {email === 'ddunia680@gmail.com' ? <div onClick={props.addClicked} className={classes.add}>New Item
                    <span><img src={plus} alt=''/></span>
            </div> : null}
            {navItems}
            <div onClick={LogoutHandler} className={classes.logout}>
                Logout
                <span><img src={arrowFrame} alt=''/></span>
            </div>
              
        </div>
        </>
    );
}

export default Dropdown;