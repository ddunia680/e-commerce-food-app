import React, { useEffect } from 'react';
import Toolbar from '../../components/toolbar/toolbar';
import OrderItem from '../../components/orderItem/orderItem';

import classes from './orders.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { pullOrders } from '../../store/orders';
const Orders = (props) => {
    let dispatch = useDispatch();
    let pulledOrders = useSelector(state => state.orders.pulledOrders);
    // console.log(pulledOrders);


    useEffect(() => {
        dispatch(pullOrders());
    }, []);

    let orders = [];
    if(pulledOrders) {
        for(let item in pulledOrders) {
            orders.push(pulledOrders[item]);
        }
    }
    // console.log(orders);
    return (
        <div>
            <Toolbar/>
            <div className={classes.body}>
                {orders.map(el => {
                    let items = {};
                    for(let itm in el) {
                        if(itm !== 'totalPrice' && itm !== 'user' && itm !== 'recId' && itm !== 'process') {
                            items = {...items, [itm]: el[itm]};
                        }
                    }
                    return <OrderItem name={el.user} items={items} price={el.totalPrice} key={el.recId} process={el.process} recId={el.recId}/>
                })}
                {/* <OrderItem/> */}
            </div>
        </div>
    );
}

export default Orders;