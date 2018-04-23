import React from 'react';

import classes from './TodoList.css';
import Todo from './Todo/Todo';

const todoList = ( props ) => {
    return (
        <div className={classes.TodoList}>
          <p>Home</p>
          <ul>
            <Todo />
            <Todo />
            <Todo />
            <Todo />            
          </ul>
        </div>
    );
};

export default todoList;