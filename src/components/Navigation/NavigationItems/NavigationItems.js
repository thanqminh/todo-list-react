import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ( props ) => {
    let links = <ul className={classes.NavigationItems}></ul>;
    if (props.isAuthenticated)
        links = <ul className={classes.NavigationItems}>
                    <NavigationItem link="/" exact>Todo</NavigationItem> 
                    <NavigationItem link="/orders">Profile</NavigationItem> 
                    <NavigationItem link="/logout">Logout</NavigationItem>
                </ul>
    return links;
};

export default navigationItems;