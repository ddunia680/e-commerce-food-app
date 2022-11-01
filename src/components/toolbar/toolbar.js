import React from 'react';
import Logo from './logo/logo';
import NavItems from './navItems/navItems';
import CartButton from '../../UI/cartButton/cartButton';
import LoginButton from '../../UI/LoginButton/loginButton';

import { GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { Authenticate } from '../../firebase';

import { LOGUSERIN } from '../../store/authentication';

import classes from './toolbar.module.css';
import { useDispatch} from 'react-redux';

const provider = new GoogleAuthProvider();

function Toolbar(props) {
    // const token = useSelector(state => state.Authenticate.token);
    let dispatch = useDispatch();
    // console.log(token);

    const handleGoogleSignin = () => {
        signInWithPopup(Authenticate, provider)
        .then(response => {
            const credentials = GoogleAuthProvider.credentialFromResult(response);
            const user = {
                name: response.user.displayName,
                photo: response.user.photoURL,
                emailAddress: response.user.email
            };
            const token = credentials.accessToken;
            const toStore = {
                user: user,
                token: token
            }
            dispatch(LOGUSERIN(toStore));
        }).catch(error => {
            console.log(error);
        }) 
    };


    return (
        <div>
            <header className={classes.toolbar}>
                <div className={classes.fullScreen}>
                    <div className={classes.logoBox}>
                        <Logo/>
                    </div>

                    <div className={classes.navBox}>
                        <NavItems/>
                    </div>
                    <div className={classes.lastPart}>
                        <CartButton clicked={props.showCartH}/>
                        <LoginButton showDropdown={props.clicked} login={handleGoogleSignin}/>
                    </div>
                </div>
                
                <div className={classes.smallScreen}>
                    <div className={classes.left}>
                        <CartButton clicked={props.showCartH}/>
                    </div>
                    <div className={classes.middle}>
                        <Logo/>
                    </div>
                    <div className={classes.right}>
                        <LoginButton showDropdown={props.clicked} login={handleGoogleSignin}/>
                    </div>
                </div>
            </header>
            
        </div>
    );
}

export default Toolbar;