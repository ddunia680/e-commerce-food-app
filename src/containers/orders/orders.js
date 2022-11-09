import React, { useEffect } from 'react';
import Toolbar from '../../components/toolbar/toolbar';
import OrderItem from '../../components/orderItem/orderItem';

import classes from './orders.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { pullOrders } from '../../store/orders';
const Orders = (props) => {
    let dispatch = useDispatch();
    let pulledOrders = useSelector(state => state.orders.pulledOrders);
    console.log(pulledOrders);


    useEffect(() => {
        dispatch(pullOrders());
    }, []);


    return (
        <div>
            <Toolbar/>
            <div className={classes.body}>
                <OrderItem/>
            </div>
        </div>
    );
}

export default Orders;