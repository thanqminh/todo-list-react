import React, { Component } from 'react';
import SideBar from '../../components/Navigation/SideBar/SideBar';
import TodoList from '../../components/TodoList/TodoList';

export class Home extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {...}
  // }
  state = {
      purchasing: false
  }

  render () {
      return (
          <div>
              <SideBar />
              <TodoList />
          </div>
      );
  }
}