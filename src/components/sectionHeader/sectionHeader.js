import React from 'react';

import classes from './sectionHeader.module.css';

function sectionHeader(props) {
    return (
        <div className={classes.wrapper}>
            <div className={classes.left}>{props.title}<span><hr></hr></span></div>
            {props.scrollable ? <div className={classes.right}>
                <div className={classes.backward}> {"<"} </div>
                <div className={classes.forward}> {">"} </div>
            </div> : null}
            
        </div>
    );
}

export default sectionHeader;