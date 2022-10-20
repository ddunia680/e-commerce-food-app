import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Control from '../Control/control';
import { CLEARCART } from '../../store/cartElements';

import classes from './cartModal.module.css';
import arrow from './images/arrow.png';
import cancelIcon from './images/cancel.png';
// import cartEmpty from './images/emptyCart.svg';

function CartModal(props) {
    const [decider, setDecider] = useState([classes.wrapper, classes.initialView]);
    const cartElements = useSelector(state => state.cartElements.cartElements);
    const totalPrice = useSelector(state => state.cartElements.totalPrice);
    const dispatch = useDispatch();

    const filteredCart = [];
    const count= [];

    for(let el of cartElements) {
        if (!filteredCart.find(newEl => newEl.name === el.name)) {
            filteredCart.push(el);
            count.push(el.name);
        } else {
            count.push(el.name);
        }
    }

    console.log(count);
    console.log(filteredCart);

    useEffect(() => {
        if(props.touched) {
            setDecider([classes.wrapper, props.visible ? classes.visible : classes.invisible]);
        }  
    }, [props.touched, props.visible, props.invisible]);

    const clearModal = () => {
        dispatch(CLEARCART());
        props.removeCart();
    }

    const countHanlder = (itemName) => {
        let number;
        count.forEach(el => {
            if(el === itemName) {
                number = number + 1;
            }
            return number
        })
    }

    return (
        <div className={decider.join(' ')}>
            <header className={classes.header}>
                <img src={arrow} alt='' onClick={props.removeCart}/>
                <h2>Cart</h2>
                <button className={classes.clearButton} onClick={clearModal}>
                    Clear 
                    <span><img src={cancelIcon} alt=''/></span>
                </button>
            </header>
            <div className={classes.detailsWrapper}>
                <div className={classes.addedItems}>
                    {filteredCart.map(cartEl => {
                        return <Control 
                                    image={cartEl.image} 
                                    name={cartEl.name}
                                    price={cartEl.price}
                                    count={() => countHanlder(cartEl.name)}
                                    key={cartEl.id}
                                />
                    })}
                </div>
                <div className={classes.checkoutDiv}>
                    <div><h4>Sub Total</h4><h4>$ {totalPrice}</h4></div>
                    <div><h4>Delivery</h4><h4>$ 2.5</h4></div>
                    <div><hr/></div>
                    <div><h3>Total</h3><h3>${totalPrice + 2.5}</h3></div>
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

export default CartModal;