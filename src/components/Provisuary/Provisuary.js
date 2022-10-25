import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from '../../axios-orders';


function Provisuary() {
    let articles = useSelector(state => state.articles.articles);
    console.log(articles);
    let chickens = articles.chickens;
    let curries = articles.curries;
    let fishes = articles.fishes;
    let fruits = articles.fruits;
    let icecreams = articles.icecreams;
    let rices = articles.rices;
    let softDrinks = articles.softDrinks;

    const pushChickens = () => {
        axios.post('/chickens.json', chickens).then(res => {
            console.log(res.data);
            return res.data;
        })
    }
    const pushCurries = () => {
        axios.post('/curries.json', curries).then(res => {
            console.log(res.data);
            return res.data;
        })
    }
    const pushFishes = () => {
        axios.post('/fishes.json', fishes).then(res => {
            console.log(res.data);
            return res.data;
        })
    }
    const pushFruits = () => {
        axios.post('/fruits.json', fruits).then(res => {
            console.log(res.data);
            return res.data;
        })
    }
    const pushIcecreams = () => {
        axios.post('/icecreams.json', icecreams).then(res => {
            console.log(res.data);
            return res.data;
        })
    }
    const pushRices = () => {
        axios.post('/rices.json', rices).then(res => {
            console.log(res.data);
            return res.data;
        })
    }

    const pushSofts = () => {
        axios.post('/softDrinks.json', softDrinks).then(res => {
            console.log(res.data);
            return res.data;
        })
    }

    useEffect(() => {
        pushChickens();
        pushCurries();
        pushFishes();
        pushFruits();
        pushIcecreams();
        pushRices();
        pushSofts();
    }, []);
    return (
        <div>
            
        </div>
    );
}

export default Provisuary;