import React from 'react';
import Logo from './logo/logo';
import NavItems from './navItems/navItems';
import CartButton from '../../UI/cartButton/cartButton';
import LoginButton from '../../UI/LoginButton/loginButton';

import classes from './toolbar.module.css';

function toolbar(props) {
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
                        <LoginButton clicked={props.clicked}/>
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
                        <LoginButton clicked={props.clicked}/>
                    </div>
                </div>
            </header>
            
        </div>
    );
}

export default toolbar;