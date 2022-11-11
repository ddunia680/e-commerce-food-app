import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faBowlFood, faUser, faMoneyBill, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Spinner from '../../UI/Spinner/spinner';
// import { ref, update } from 'firebase/database';
// import { db } from '../../firebase';

import classes from './orderItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { pullProcessed, PushProcessed } from '../../store/orders';
const OrderItem = (props) => {
    let dispatch = useDispatch();
    let processed = useSelector(state => state.orders.processed);
    let loadingstatePush = useSelector(state => state.orders.pushProcessedState);
    let loadingstatePull = useSelector(state => state.orders.processedState);
    let [isProcessed, setIsProcessed] = useState(false);
    // console.log(isProcessed);

    let extraItems = [];
    for(let item in props.items) {
        extraItems.push({name: item, val: props.items[item]});
    }

    useEffect(() => {
        dispatch(pullProcessed());
    }, []);
    
    useEffect(() => {
        if(processed) {
        for(let el in processed) {
            console.log(processed[el].token);
            if(processed[el].token === props.recId) {
                setIsProcessed(true);
            }
        }
    }
    }, [processed]);
    
    const handleUpdate = (elID) => {
        if(!isProcessed) {
            let process = {token: elID};
        dispatch(PushProcessed(process)).then(res => {
            dispatch(pullProcessed());
        });
        }
            // console.log(res);
    }

    let buttonIN;
    if(loadingstatePush === 'loading' || loadingstatePull === 'loading') {
        buttonIN = <Spinner/>
    } else {
        buttonIN = 'Process';
    }

    return (
        <div className={classes.wrapper}>
            <h3>
                <span><FontAwesomeIcon icon={faUser} /></span>
                Customer {props.name}
            </h3>
            {extraItems.map(el => {
                return <div key={Math.random() * 100}><span><FontAwesomeIcon icon={faBowlFood} /></span>
                <b>{el.name}: </b> {el.val} pieces
            </div>
            })}
            {/* <div><span><FontAwesomeIcon icon={faBowlFood} /></span>
                <b>Chicken Kebab: </b> 3pieces
            </div>
            <div><span><FontAwesomeIcon icon={faPizzaSlice} /></span>
                <b>Chicken Kebab: </b> 3pieces
            </div> */}
            <label className={classes.totalP}><span><FontAwesomeIcon icon={faMoneyBill} /></span>
                <b>Total Price: </b> {props.price}$
            </label>
            {!isProcessed ? <button className={classes.proccess} onClick={() => handleUpdate(props.recId)}>
                {buttonIN}
            </button> :
            <button className={classes.processed}>Processed</button>}
            {!isProcessed ? <span className={classes.iconProcess}><FontAwesomeIcon icon={faQuestionCircle} /></span> :
            <span className={classes.iconProcessed}><FontAwesomeIcon icon={faThumbsUp} /></span>}
        </div>
    );
}

export default OrderItem;