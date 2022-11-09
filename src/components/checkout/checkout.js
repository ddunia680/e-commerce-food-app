import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postData } from '../../store/orders';
import Spinner from '../../UI/Spinner/spinner';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { CLEARCART } from '../../store/cartElements';

import classes from './checkout.module.css';
function Checkout(props) {
    const cart = useSelector(state => state.cartElements.cartElements);
    const totalPrice = useSelector(state => state.cartElements.totalPrice);
    const userName = useSelector(state => state.Authenticate.userName);
    let status = useSelector(state => state.orders.loadingStatus);
    let error = useSelector(state => state.orders.error);
    let dispatch = useDispatch();

    const wrapperClasses = [classes.wrapper, props.checkout ? classes.visible : classes.invisible];
    // console.log(cart);

    const SendData = () => {
        let data = {
            ...values,
            user: userName,
            totalPrice: totalPrice + 2.5
        };
        dispatch(postData(data)).then(res => {
             props.rmvCheck();
             dispatch(CLEARCART());
        });
               
        }
    const values = [];
    for(let el of cart) {
        let theEl = values.find(item => item.name === el.name);
        if(theEl) {
            let index = values.findIndex(item => item.name === el.name);
            values[index].val += 1; 
        } else {
            values.push({name: el.name, val: 1});
        }
    }
   console.log(status);
    let body;
    if(status === 'loading') {
        body = <Spinner className={classes.spin}/>
    } else if(status === 'succeeded') {
        body = <FontAwesomeIcon icon={faThumbsUp} className={classes.icon}/>
    } else if(status === 'rejected') {
        body = <p>{error}</p>
    } else if(!status) {
        body = 
        <>
             <h3>Data to be Added</h3>
            <h4>Total Price {totalPrice + 2.5}</h4>
            <div className={classes.summary}>
                <div className={classes.theItems}>
                    {values.map(el => <h5 key={el.name}>{el.name}: {el.val} pieces</h5>)}
                </div>
            </div>
            
            <button onClick={SendData}>Confirm Order</button>
        </>
    }

    return (
        <div className={wrapperClasses.join(' ')}>
           {body}
        </div>
    );
}

export default Checkout;