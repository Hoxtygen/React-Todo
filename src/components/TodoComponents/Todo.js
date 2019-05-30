import React, { Component } from "react";
import TodoList from "./TodoList";



export default class Todo extends Component {
  render() {
    return (
      <div>
      <TodoList
        todos = {this.props.todos}
        
      />
      </div>
    );
  }
}
