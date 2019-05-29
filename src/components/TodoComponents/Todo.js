import React, { Component } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

export default class Todo extends Component {
  render() {
    return (
      <div>
      <TodoList
        {...this.props}
        
      />
      <TodoForm
          handleSubmit = {this.props.handleSubmit}
          handleAddTodo = {this.props.handleAddTodo}
          handleChange = {this.props.handleChange}
      />
      </div>
    );
  }
}
