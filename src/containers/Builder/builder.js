import React from 'react';
import Toolbar from '../../components/toolbar/toolbar';
import WelcomeSection from '../welcomeSection/welcomeSection';
import FruitDisplay from '../fruitsDisplaySection/fruitsDisplay';
import DishesDisplay from '../dishesDisplaySection/dishesDisplay';
// import CartModal from '../../components/cartModal/cartModal';
// import Dropdown from '../../components/headerDropdown/dropdown';
// import AddNewItem from '../addNewItemView/addNewItem';

function builder(props) {
    return (
        <div>
            <Toolbar/>
            <WelcomeSection/>
            <FruitDisplay/>
            <DishesDisplay/>
            {/* <CartModal/> */}
            {/* <Dropdown/> */}
            {/* <AddNewItem/> */}

        </div>
    );
}

export default builder;