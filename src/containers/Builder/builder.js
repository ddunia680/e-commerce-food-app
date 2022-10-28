import React, { useEffect, useState } from 'react';
import Toolbar from '../../components/toolbar/toolbar';
import WelcomeSection from '../welcomeSection/welcomeSection';
import FruitDisplay from '../fruitsDisplaySection/fruitsDisplay';
import DishesDisplay from '../dishesDisplaySection/dishesDisplay';
import CartModal from '../../components/cartModal/cartModal';
import Dropdown from '../../components/headerDropdown/dropdown';
import AddNewItem from '../addNewItemView/addNewItem';


import classes from './builder.module.css';

function Builder(props) {
    let [toolbarDrop, setToolbarDrop] = useState(false);
    let [showCart, setCartVisibility] = useState(false);
    let [cartTouched, setCartTouched] = useState(false);
    let [showAddModal, setshowAddModal] = useState(false);
    let [addModalTouched, setAddModalTouched] = useState(false);

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
        setCartTouched(true);
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
    })

    let operations;

    // if (loadingState === 'succeeded') {
        operations = (
            <>
                <WelcomeSection/>
                <FruitDisplay/>
                <DishesDisplay/>
                <CartModal visible={showCart} removeCart={rmvCartHandler} touched={cartTouched}/>
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

        </div>
    );
}

export default Builder;