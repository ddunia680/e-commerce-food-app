import React from 'react';
import MainMessage from '../../components/firstDisplay/mainMessage';
import ArticlesDisplay from '../../components/articlesDisplay/articlesDisplay';

import classes from './welcomeSection.module.css';

function welcomeSection(props) {
    return (
        <div className={classes.wrapper}>
            <MainMessage/>
            <ArticlesDisplay/>
        </div>
    );
}

export default welcomeSection;