import React from 'react';

import classes from './SideBar.css';


const sideBar = ( props ) => {
    return (       
        <div className={classes.SideBar}>
            <div>Lists: </div>
            <ul>
                <li>Home</li>
                <li>Work</li>
                <li>Project</li>
                <li>Other list</li>
            </ul>
        </div>       
    );
};

export default sideBar;
