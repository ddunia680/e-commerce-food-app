import React, { useEffect, useRef, useState } from 'react';

import classes from './addNewItem.module.css';
import cup from './icons/cup.png';
import cloud from './icons/cloud.png';
import residence from './icons/residence.png';
import dollar from './icons/dollar.png';
import { useDispatch } from 'react-redux';
import { storage } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import Spinner from '../../UI/Spinner/spinner';


import { pushToChickens, pullChickens } from '../../store/chickens';
import { pushToCurries, pullCurries } from '../../store/curries';
import { pushToFishes, pullFishes } from '../../store/fishes';
import { pushToFruits, pullFruits } from '../../store/fruits';
import { pushToIceCreams, pullIcecreams } from '../../store/icecreams';
import { pushToRices, pullRices } from '../../store/rices';
import { pushToSoftDrinks, pullSoftDrinks } from '../../store/softDrinks';

function AddNewItem(props) {
    const title = useRef();
    let [titleValid, setTiltleValid] = useState(false);
    let [caloriesValid, setCaloriesValidity] = useState(false);
    let [priceIsValid, setPriceValidity] = useState(false);
    let [formValid, setformValidity] = useState(false);
    let [touched, setTouched] = useState({title: false, calories: false, price: false});

    let [formValues, setFormValues] = useState({title: '', category: 'Chickens', calories: '', price: ''});
    let [uploadedImage, setUploadedImage] = useState(''); 
    let [updateMclasses, setMclasses] = useState(false);
    let [addedModalClasses, setAddedModalClasses] = useState([]);
    let [modalDisplayMessage, setModalMessage] = useState('');
    let [loading, setLoading] = useState(false);
    let uplaodInput = useRef();
    let dispatch = useDispatch();

    const dishes = ['Chickens', 'Curries', 'Rices', 'Fishes', 'Fruits', 'Icecreams', 'Soft Drinks'];

    let wrapperClasses = [classes.wrapper, !props.touched ? classes.initial : props.show ? classes.visible : classes.invisible];


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
            setUploadedImage(event.target.files[0]);
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
        } else {
            setAddedModalClasses([]);
        }
    }, [uploadedImage]);

    const submitData = () => {
        setLoading(true);
        if(uploadedImage === null) return;

        //here we are using the ref to define where in firebase we are going to store the image
        const imageRef = ref(storage, `images/${uploadedImage.name + v4()}`);
        uploadBytes(imageRef, uploadedImage).then((snapshot) => {
            setLoading(false);
            getDownloadURL(snapshot.ref).then(url => {
                return url;
            }).then(res => {
                const dataToSend = {
                image: res,
                name: formValues.title,
                calories: +formValues.calories,
                price: +formValues.price,
                id: Math.random() * 100
        }
        console.log(dataToSend);
        switch (formValues.category) {
            case 'Chickens':
                dispatch(pushToChickens(dataToSend)).then(res => {
                    dispatch(pullChickens());
                });
                break;
            case 'Curries':
                dispatch(pushToCurries(dataToSend)).then(res => {
                    dispatch(pullCurries());
                });               
                break;
            case 'Rices':
                dispatch(pushToRices(dataToSend)).then(res => {
                    dispatch(pullRices());
                });
                break;
            case 'Fishes':
                dispatch(pushToFishes(dataToSend)).then(res => {
                    dispatch(pullFishes());
                });               
                break;
            case 'Fruits':
                dispatch(pushToFruits(dataToSend)).then(res => {
                    dispatch(pullFruits());
                });                
                break;
            case 'Icecreams':
                dispatch(pushToIceCreams(dataToSend)).then(res => {
                    dispatch(pullIcecreams());
                });               
                break;
            case 'Soft Drinks':
                dispatch(pushToSoftDrinks(dataToSend)).then(res => {
                    dispatch(pullSoftDrinks());
                });
                break;
        
            default:
                break;
        }
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
                setTouched({title: false, calories: false, price: false});
                setformValidity(false);
            }, 500);
            
        }, 2000);
            });
        });
        
    }

    const closeWindow = () => {
        props.remove();
        setAddedModalClasses([classes.addedConfirm, classes.initialState]);
        setFormValues({title: '', category: 'chickens', calories: '', price: ''});
        setUploadedImage(null);
        setMclasses(false);
        setTouched({title: false, calories: false, price: false});
        setformValidity(false);
    }
    return (
        <div className={wrapperClasses.join(' ')}>
            <button 
                className={classes.cancelBtn} 
                onClick={closeWindow}
                title='Click to Cancel'
            >x</button>
            <div className={classes.frame1}>
                    { !loading ? <p className={addedModalClasses.join(' ')}>{modalDisplayMessage}</p>: <Spinner/>}
                
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
                        <button title='Cancel Image' onClick={() => {setUploadedImage('');
                        setModalMessage('');
                        }}>x</button>
                        <img src={URL.createObjectURL(uploadedImage)} alt=''/>
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