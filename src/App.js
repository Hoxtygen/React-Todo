import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);
    this.state = {
      todoName: "",
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
  handleAddTodo(todoName) {
    let newTodo = {
      id: this.state.todos.length + 1,
      todoName: todoName
    }
  }
  

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        
        <TodoList 
          {...this.state}
        />
        <TodoForm />
      </div>
    );
  }
}

export default App;
