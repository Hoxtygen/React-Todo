import React, { Component } from "react";
import TodoList from "./TodoList";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
      {
        id: 1,
        todoName: "Go to a meeting in Maryland"
      },
      {
        id: 2,
        todoName: "Take the kids to Jurasic park"
      },
      {
        id: 3,
        todoName: "Attend Organization end of the year party"
      },
      {
        id: 4,
        todoName: "Say no to offer from Wasteland"
      },
      {
        id: 5,
        todoName: "Go to the rendezvous for some downtime"
      },
      {
        id: 6,
        todoName: "Solve the mystery surrounding the dancing men"
      }
    ]
  }
  }

  render() {
    return (
      <div>
        <h2>Hello World</h2>
        <TodoList
        {...this.state} 
        />
      </div>
    );
  }
}
