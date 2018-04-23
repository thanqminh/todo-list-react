import React from 'react';

import classes from './Todo.css';


const todo = ( props ) => {
    return (
        <li className={classes.Todo}>
            <input type="checkbox" /> <span>fsdf </span><span className={classes.DeleteTodo}>x</span>
        </li>
    );
};

export default todo;