import React from 'react';

import classes from './SideBar.css';


const sideBar = ( props ) => {
    return (       
        <ul className={classes.sideBar}>
            <li>Home</li>
            <li>Work</li>
            <li>Project</li>
            <li>Other list</li>
        </ul>       
    );
};

export default sideBar;