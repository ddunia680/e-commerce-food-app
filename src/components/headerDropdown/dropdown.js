import React from 'react';
import NavItem from '../toolbar/navItems/navItem/navItem';

import { signOut } from 'firebase/auth';

import classes from './dropdown.module.css';
import plus from './icons/plus.png';
import arrowFrame from './icons/arrowFrame.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons'

import { LOGUSEROUT } from '../../store/authentication';
import { Authenticate } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';

function Dropdown(props) {
    let dispatch = useDispatch();
    let email = useSelector(state => state.Authenticate.emailAddress);
    const classesWrp = email === 'ddunia680@gmail.com' ? classes.wrapper2 : classes.small;

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
        <div className={classesWrp}>
            {email === 'ddunia680@gmail.com' ? <div onClick={props.addClicked} className={classes.add}>New Item
                    <span><img src={plus} alt=''/></span>
            </div> : null}
            {email === 'ddunia680@gmail.com' ? 
            <>
                <NavItem name='Home' to='/' />
                <NavItem name='Orders' to='/orders' />
                <NavItem name='About Us' to='/about' />
                <NavItem name='Services' to='/services' />
            </> : null}
                
            <div onClick={LogoutHandler} className={classes.logout}>
                Logout
                <span><FontAwesomeIcon icon={faSignOut}/></span>
            </div>
              
        </div>
        </>
    );
}

export default Dropdown;