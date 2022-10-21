import React, { useRef } from 'react';

import classes from './addNewItem.module.css';
import cup from './icons/cup.png';
import cloud from './icons/cloud.png';
import residence from './icons/residence.png';
import dollar from './icons/dollar.png';

function AddNewItem(props) {
    const title = useRef();

    const wrapperClasses = [classes.wrapper, !props.touched ? classes.initial : props.show ? classes.visible : classes.invisible];

    const checkValidity = {
        title: {
            minLength: 5,
            isValid: false
        },
        calories: {
            minValue: 40,
            isValid: false
        },
        price: {
            minValue: 5,
            isValid: false
        },
        allValid: false
    }





    return (
        <div className={wrapperClasses.join(' ')}>
            <div className={classes.frame1}>
                <div className={classes.inputDiv}>
                    <img src={cup} alt=''/>
                    <input type='text' ref={title} placeholder='Give me a title...'/>
                </div>
                <select className={classes.dropdown}>
                    <option>Select Category</option>
                    <option>Food</option>
                    <option>Fruits</option>
                </select>
                <div className={classes.uploadDiv}>
                    <img src={cloud} alt=''/>
                    <h3>Click here to upload</h3>
                </div>
                <div className={classes.detailsDiv}>
                    <div>
                        <img src={residence} alt=''/>
                        <input type='number' placeholder='Calories'/>
                    </div>
                    <div>
                        <img src={dollar} alt='' className={classes.dollar}/>
                        <input type='number' placeholder='Price'/>
                    </div>
                </div>
                <div className={classes.buttonWrapper}>
                    <button>Save</button>
                </div>
            </div>
        </div>
    );
}

export default AddNewItem;