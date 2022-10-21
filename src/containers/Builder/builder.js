import React, { useState } from 'react';
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

    return (
        <div className={classes.wrapper}>
            <Toolbar clicked={showToolbarDrop} showCartH={showCartHandler}/>
            <WelcomeSection/>
            <FruitDisplay/>
            <DishesDisplay/>
            <CartModal visible={showCart} removeCart={rmvCartHandler} touched={cartTouched}/>
            {toolbarDrop ? <Dropdown 
                                clicked={removeToolbarDrop} 
                                addClicked = {showAddModalHandler}
                            />: null
            }
            <AddNewItem show={showAddModal} touched={addModalTouched}/>

        </div>
    );
}

export default Builder;