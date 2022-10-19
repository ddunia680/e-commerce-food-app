import React from 'react';

import bikeImage from './images/delivery.png';
import classes from './mainMessage.module.css';

function MainMessage(props) {
    return (
        <div className={classes.wrapper}>
            <button className={classes.deliveryButton}>
                Bike Delivery 
                <span><img src={bikeImage} alt=''/></span>
            </button>
            <h1>The Fastest Delivery in <span>Your City</span></h1>
            <p>The href attribute requires a valid value to be accessible.     Provide a valid, navigable address as the 
                href value. If you cannot provide a valid href, but still need the element to resemble a link
            </p>
            <button className={classes.orderButton}>Order Now</button>
        </div>
    );
}

export default MainMessage;