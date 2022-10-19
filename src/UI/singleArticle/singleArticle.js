import React from 'react';

import classes from './singleArticle.module.css';

function singleArticle(props) {
    return (
        <div className={classes.mainWrapper}>
            <div className={classes.blurDiv}>
                <div>
                    <img src={props.image} alt=''/>
                </div>
                <h3>{props.name}</h3>
                <h5 className={classes.named}>{props.spices}</h5>
                <h5 className={classes.price}><span>$ </span>{props.price}</h5>
        </div>
        </div>
    );
}

export default singleArticle;