import React, { useEffect, useState } from 'react';
import Toolbar from '../../components/toolbar/toolbar';
import WelcomeSection from '../welcomeSection/welcomeSection';
import FruitDisplay from '../fruitsDisplaySection/fruitsDisplay';
import DishesDisplay from '../dishesDisplaySection/dishesDisplay';
import CartModal from '../../components/cartModal/cartModal';
import Dropdown from '../../components/headerDropdown/dropdown';
import AddNewItem from '../addNewItemView/addNewItem';
import Checkout from '../../components/checkout/checkout';
import Backdrop from '../../UI/backdrop/backdrop';

import Transition from 'react-transition-group/Transition';
import classes from './builder.module.css';

function Builder(props) {
    let [toolbarDrop, setToolbarDrop] = useState(false);
    let [showCart, setCartVisibility] = useState(false);
    let [showAddModal, setshowAddModal] = useState(false);
    let [addModalTouched, setAddModalTouched] = useState(false);
    let [checkout, setCheckout] = useState(false);

    // console.log(articles);
    useEffect(() => {
        // dispatch(pullArticles())
    }, []);

    const showToolbarDrop = () => {
        setToolbarDrop(true);
    }
    const removeToolbarDrop = () => {
        setToolbarDrop(false);
    }

    const showCartHandler = () => {
        setCartVisibility(true);
    }
    const rmvCartHandler = () => {
        setCartVisibility(false);
    }

    const showAddModalHandler = () => {
        setshowAddModal(true);
        removeToolbarDrop();
        setAddModalTouched(true);
    }

    const hideModalHandler = () => {
        setshowAddModal(false);
    }

    window.addEventListener('scroll', () => {
        setToolbarDrop(false);
    });

    const AddCheckout = () => {
        setCheckout(true);
    }
    const rmvCheckout = () => {
        setCheckout(false);
    }

    let operations;

    // if (loadingState === 'succeeded') {
        operations = (
            <>
                <WelcomeSection/>
                <FruitDisplay/>
                <DishesDisplay/>
                <Transition
                    in={showCart}
                    timeout={500}
                    mountOnEnter
                    unmountOnExit
                >
                    <CartModal visible={showCart} removeCart={rmvCartHandler} addCheck={AddCheckout}/>
                </Transition>
                
                {toolbarDrop ? <Dropdown 
                                    clicked={removeToolbarDrop} 
                                    addClicked = {showAddModalHandler}
                                />: null
                }
                <AddNewItem show={showAddModal} remove={hideModalHandler} touched={addModalTouched}/>
            </>
        )
    return (
        <div className={classes.wrapper}>
            <Toolbar clicked={showToolbarDrop} showCartH={showCartHandler}/>
            {operations}
            { checkout ? <Backdrop /> : null}
            <Transition
                in={checkout}
                timeout={500}
                mountOnEnter
                unmountOnExit
            >
                {state => (
                    <Checkout checkout={checkout} rmvCheck={rmvCheckout}/>
                )}
            </Transition>
        </div>
    );
}

export default Builder;