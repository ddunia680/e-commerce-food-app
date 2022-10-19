import React from 'react';

import classes from './sectionHeader.module.css';

function sectionHeader(props) {
    return (
        <div className={classes.wrapper}>
            <div className={classes.left}>
                {props.title}<span><hr></hr></span>
            </div>
            {props.scrollable ? 
            <div className={classes.right}>
                {props.scrollx !== 0 ? 
                    (<div className={classes.backward} onClick={props.left}> {"<"} </div>)
                : null}


                {!props.scrollend ? 
                    (<div className={classes.forward} onClick={props.right}> {">"} </div>)
                : null}
            </div>: null}
            
        </div>
    );
}

export default sectionHeader;