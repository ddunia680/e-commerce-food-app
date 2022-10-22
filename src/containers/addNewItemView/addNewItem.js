import React, { useEffect, useRef, useState } from 'react';

import classes from './addNewItem.module.css';
import cup from './icons/cup.png';
import cloud from './icons/cloud.png';
import residence from './icons/residence.png';
import dollar from './icons/dollar.png';
import d8 from './icons/d8.png';

function AddNewItem(props) {
    const title = useRef();
    let [titleValid, setTiltleValid] = useState(false);
    // let [selectIsValid, setSelectValidity] = useState(false);
    // let [uploadIsValid, setUploadValidy] = useState(false);
    let [caloriesValid, setCaloriesValidity] = useState(false);
    let [priceIsValid, setPriceValidity] = useState(false);
    let [formValid, setformValidity] = useState(false);
    let [touched, setTouched] = useState({title: false, calories: false, price: false});

    let [formValues, setFormValues] = useState({title: '', category: '', calories: '', price: ''});
    let [uploadedImage, setUploadedImage] = useState(null); 
    let uplaodInput = useRef();

    const dishes = ['Chicken', 'Curry', 'Rice', 'Fish', 'Fruits', 'Icecreams', 'Soft Drinks'];

    const wrapperClasses = [classes.wrapper, !props.touched ? classes.initial : props.show ? classes.visible : classes.invisible];

    const validityCheck = (type, event) => {
        if(type === 'title') {
            if(event.target.value !== '') {
                const touch = {...touched};
                touch.title = true;
                setTouched(touch);
            } else {
                const touch = {...touched};
                touch.title = false;
                setTouched(touch);
            }
            event.target.value.length > 5 ? setTiltleValid(true) : setTiltleValid(false);
        }

        if(type === 'calories') {
            if(event.target.value !== '') {
                const touch = {...touched};
                touch.calories = true;
                setTouched(touch);
            } else {
                const touch = {...touched};
                touch.calories = false;
                setTouched(touch);
            }
            event.target.value > 50 ? setCaloriesValidity(true) : setCaloriesValidity(false);
        }

        if(type === 'price') {
            if(event.target.value !== '') {
                const touch = {...touched};
                touch.price = true;
                setTouched(touch);
            } else {
                const touch = {...touched};
                touch.price = false;
                setTouched(touch);
            }
            event.target.value > 5 ? setPriceValidity(true) : setPriceValidity(false);
        }
    }

    useEffect(() => {
        setformValidity(titleValid && caloriesValid && priceIsValid);
    }, [titleValid, caloriesValid, priceIsValid])
    
    // console.log(formValid);

    const storeUploadedFile = (event) => {
        setUploadedImage(event.target.files[0]);
        console.log(event.target.files[0]);
    }

    return (
        <div className={wrapperClasses.join(' ')}>
            <div className={classes.frame1}>
                <div className={`${classes.inputDiv} ${touched.title ? !titleValid ? classes.invalid: null : null}`}>
                    <img src={cup} alt=''/>
                    <input 
                        type='text' 
                        ref={title} 
                        placeholder='Give me a title...' 
                        onChange={(event) => {
                            validityCheck('title', event);
                            let updatedForm = {...formValues}
                            updatedForm.title = event.target.value;
                            setFormValues(updatedForm);
                        }
                        } 
                        value={formValues.title}/>
                </div>
                <select className={classes.dropdown}>
                    {dishes.map(el => <option key={el} value={el}>{el}</option>)}
                </select>
                <input 
                    type='file' 
                    ref={uplaodInput} 
                    onChange={event => storeUploadedFile(event)}
                    style={{display: 'none'}}
                />
                <div className={classes.uploadDiv} onClick={() => uplaodInput.current.click()}>
                    <img src={cloud} alt=''/>
                    <h3>Click here to upload</h3>
                    {/* <div className={classes.uploaded}>
                        <img src={d8} alt=''/>
                    </div> */}
                    
                </div>
                <div className={classes.detailsDiv}>
                    <div className={`${classes.calories} ${touched.calories ? !caloriesValid ? classes.invalid : null: null}`}>
                        <img src={residence} alt=''/>
                        <input 
                            type='number' 
                            placeholder='Calories' 
                            onChange={(event) => {
                                validityCheck('calories', event);
                                let updatedForm = {...formValues}
                                updatedForm.calories = event.target.value;
                                setFormValues(updatedForm);
                            }
                            }
                            value={formValues.calories}
                        />
                    </div>
                    <div className={`${classes.price} ${touched.price ? !priceIsValid ? classes.invalid : null: null}`}>
                        <img src={dollar} alt='' className={classes.dollar}/>
                        <input 
                            type='number' 
                            placeholder='Price'
                            onChange={(event) => {
                                validityCheck('price', event);
                                let updatedForm = {...formValues}
                                updatedForm.price = event.target.value;
                                setFormValues(updatedForm);
                            }
                            }
                            value={formValues.price}
                        />
                    </div>
                </div>
                <div className={classes.buttonWrapper}>
                    <button disabled={!formValid}>Save</button>
                </div>
            </div>
        </div>
    );
}

export default AddNewItem;