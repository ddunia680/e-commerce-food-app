import React from 'react';
import { useSelector } from 'react-redux';
import avatar from '../Images/avatar.png';

import classes from './loginButton.module.css';

function LoginButton(props) {
    let token = useSelector(state => state.Authenticate.token);
    let photoURL = useSelector(state => state.Authenticate.photoURL);
    let name = useSelector(state => state.Authenticate.userName);

    return (
        <button className={classes.avatar}>
            {token ? 
                <img src={photoURL} alt='' onClick={props.showDropdown} title={'Logged in as ' + name}/> 
            : 
                <img src={avatar} alt='' title='Click to Log in' onClick={props.login}/>}
        </button>
    );
}

export default LoginButton;