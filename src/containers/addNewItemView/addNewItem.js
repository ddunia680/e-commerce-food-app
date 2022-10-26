import React, { useEffect, useRef, useState } from 'react';

import classes from './addNewItem.module.css';
import cup from './icons/cup.png';
import cloud from './icons/cloud.png';
import residence from './icons/residence.png';
import dollar from './icons/dollar.png';
import { useDispatch } from 'react-redux';
// import { ADDNEWARTICLE } from '../../store/articles';

function AddNewItem(props) {
    const title = useRef();
    let [titleValid, setTiltleValid] = useState(false);
    let [caloriesValid, setCaloriesValidity] = useState(false);
    let [priceIsValid, setPriceValidity] = useState(false);
    let [formValid, setformValidity] = useState(false);
    let [touched, setTouched] = useState({title: false, calories: false, price: false});

    let [formValues, setFormValues] = useState({title: '', category: 'chickens', calories: '', price: ''});
    let [uploadedImage, setUploadedImage] = useState(); 
    let [updateMclasses, setMclasses] = useState(false);
    let [addedModalClasses, setAddedModalClasses] = useState([]);
    let [modalDisplayMessage, setModalMessage] = useState('');
    let uplaodInput = useRef();
    let dispatch = useDispatch();

    // console.log(formValues);
    const dishes = ['Chickens', 'Curries', 'Rices', 'Fishes', 'Fruits', 'Icecreams', 'Soft Drinks'];

    const wrapperClasses = [classes.wrapper, !props.touched ? classes.initial : props.show ? classes.visible : classes.invisible];


    // console.log(uploadedImage);
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
        setformValidity(titleValid && caloriesValid && uploadedImage && priceIsValid);
    }, [titleValid, caloriesValid, priceIsValid, uploadedImage])
    
    // console.log(formValid);

    const storeUploadedFile = (event) => {
        if(event.target.files && event.target.files[0]) {
            setUploadedImage(URL.createObjectURL(event.target.files[0]));
            setMclasses(true);
            setModalMessage('File Added');
        }
    }
    useEffect(() => {
        setAddedModalClasses([classes.addedConfirm, !updateMclasses ? classes.initialState : !uploadedImage ? null : classes.Addedvisible]);
    }, [uploadedImage]);
    

    useEffect(() => {
        if(uploadedImage) {
            setTimeout(() => {
                setAddedModalClasses([classes.addedConfirm, classes.Addedinvisible]);
                setTimeout(() => {
                    setAddedModalClasses([classes.unMount]);
                }, 300);
            }, 3000);
        }
    }, [uploadedImage]);


    const submitData = () => {
        const dataToSend = {
            type: formValues.category.toLowerCase(),
            data: {
                image: uploadedImage,
                name: formValues.title,
                calories: formValues.calories,
                price: +formValues.price,
                id: Math.random * 100
            }
        }
        console.log(dataToSend);
        // dispatch(ADDNEWARTICLE(dataToSend));
        setModalMessage('Article Added!');
        setAddedModalClasses([classes.addedConfirm, classes.Addedvisible]);
        setTimeout(() => {
            setAddedModalClasses([classes.addedConfirm, classes.Addedinvisible]);
            setTimeout(() => {
                props.remove();
                setAddedModalClasses([classes.addedConfirm, classes.initialState]);
                setFormValues({title: '', category: 'chickens', calories: '', price: ''});
                setUploadedImage(null);
                setMclasses(false);
            }, 500);
            
        }, 2000);
    }
    // console.log(addedModalClasses);
    return (
        <div className={wrapperClasses.join(' ')}>
            <div className={classes.frame1}>
                    <p className={addedModalClasses.join(' ')}>{modalDisplayMessage}</p>
                
                <div 
                    className={`${classes.inputDiv} ${touched.title ? !titleValid ? classes.invalid: null : null}`}
                >
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
                        value={formValues.title}
                    />
                </div>
                <select 
                    className={classes.dropdown} 
                    onChange={event => {
                        let updatedForm = {...formValues}
                        updatedForm.category = event.target.value;
                        setFormValues(updatedForm);
                    }}
                >
                    {dishes.map(el => <option key={el} value={el}>{el}</option>)}
                </select>
                <input 
                    type='file' 
                    ref={uplaodInput} 
                    onChange={event => storeUploadedFile(event)}
                    style={{display: 'none'}}
                />
                { !uploadedImage ? <div className={classes.uploadDiv} onClick={() => uplaodInput.current.click()}>
                    <img src={cloud} alt=''/>
                    <h3>Click here to upload</h3>
                </div> :
                <div className={classes.uploadDiv}>
                    <div className={classes.uploaded}>
                        <img src={uploadedImage} alt=''/>
                    </div>
                </div> }
                    
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
                    <button 
                        disabled={!formValid} 
                        onClick={event => submitData(event)}>
                            Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddNewItem;