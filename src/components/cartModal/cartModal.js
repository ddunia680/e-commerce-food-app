import React from 'react';
import Control from '../Control/control';

import classes from './cartModal.module.css';
import arrow from './images/arrow.png';
import cancelIcon from './images/cancel.png';
// import cartEmpty from './images/emptyCart.svg';

function cartModal(props) {
    return (
        <div className={classes.wrapper}>
            <header className={classes.header}>
                <img src={arrow} alt=''/>
                <h2>Cart</h2>
                <button className={classes.clearButton}>
                    Clear 
                    <span><img src={cancelIcon} alt=''/></span>
                </button>
            </header>
            <div className={classes.detailsWrapper}>
                <div className={classes.addedItems}>
                    <Control/>
                    <Control/>
                    <Control/>
                    <Control/>
                    <Control/>
                </div>
                <div className={classes.checkoutDiv}>
                    <div><h4>Sub Total</h4><h4>$ 39</h4></div>
                    <div><h4>Delivery</h4><h4>$ 2.5</h4></div>
                    <div><hr/></div>
                    <div><h3>Total</h3><h3>$41.5</h3></div>
                    <div>
                        <button className={classes.checkoutBtn}>Check Out</button>
                    </div>
                </div>
                
            </div>
            {/* <div className={classes.noItems}>
                <img src={cartEmpty} alt=''/>
                <h2>Add some items to your cart</h2>
            </div> */}
            
        </div>
    );
}

export default cartModal;