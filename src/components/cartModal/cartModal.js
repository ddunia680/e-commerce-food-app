import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Control from '../Control/control';
import { ADDTOCART, CLEARCART, DELETETOCART } from '../../store/cartElements';

import classes from './cartModal.module.css';
import arrow from './images/arrow.png';
import cancelIcon from './images/cancel.png';
import cartEmpty from './images/emptyCart.svg';

function CartModal(props) {
    const cartElements = useSelector(state => state.cartElements.cartElements);
    const totalPrice = useSelector(state => state.cartElements.totalPrice);
    const dispatch = useDispatch();

    const filteredCart = [];
    const count= [];

    const decider = [classes.wrapper, props.visible ? classes.visible : classes.invisible]

    for(let el of cartElements) {
        if (!filteredCart.find(newEl => newEl.name === el.name)) {
            filteredCart.push(el);
            count.push(el.name);
        } else {
            count.push(el.name);
        }
    }

    const clearModal = () => {
        dispatch(CLEARCART());
        props.removeCart();
    }

    const deleteItemHandler = (name, price) => {
        dispatch(DELETETOCART({name: name, price: price}));
    }

    const addItemToCart = (array) => {
        const data = {
            image: array[0],
            name: array[1],
            calories: array[2],
            price: array[3],
            id: array[4]
        }
        dispatch(ADDTOCART(data));
    }

    const Checkout = () => {
        props.removeCart();
        props.addCheck();
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
            { cartElements.length === 0 ? 
            <div className={classes.noItems}>
                <img src={cartEmpty} alt=''/>
                <h2>Add some items to your cart</h2>
            </div>:
            <div className={classes.detailsWrapper}>
            <div className={classes.addedItems}>
                {filteredCart.map(cartEl => {
                    return <Control 
                                image={cartEl.image} 
                                name={cartEl.name}
                                price={cartEl.price}
                                count={count.filter(el => el === cartEl.name).length}
                                deleteEl={() => deleteItemHandler(cartEl.name, cartEl.price)}
                                addNewEl={() => 
                                    addItemToCart([
                                        cartEl.image, 
                                        cartEl.name, 
                                        cartEl.calories, 
                                        cartEl.price, 
                                        cartEl.id]
                                    )}
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
                    <button className={classes.checkoutBtn} onClick={Checkout}>
                        Check Out
                    </button>
                </div>
            </div>
            
        </div> 
        }
            
        </div>
    );
}

export default CartModal;