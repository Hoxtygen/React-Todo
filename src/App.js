import React from "react";
import "./components/TodoComponents/Todo.css";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import SearchForm from "./components/TodoComponents/SearchForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);
    this.state = {
      newTask: "",
      todos: [
        {
          //id: new Date(),
          id: 1,
          task: "Go to a meeting in Maryland",
          completed: false
        },
        {
          //id: new Date(),
          id: 2,
          task: "Take the kids to Jurasic park",
          completed: false
        },
        {
          //id: new Date(),
          id: 3,
          task: "Attend Organization end of the year party",
          completed: false
        },
        {
          //id: new Date(),
          id: 4,
          task: "Say no to offer from Wasteland",
          completed: false
        },
        {
          //id: new Date(),
          id: 5,
          task: "Go to the rendezvous for some downtime",
          completed: false
        },
        {
          //id: new Date(),
          id: 6,
          task: "Solve the mystery surrounding the dancing men",
          completed: false
        }
      ]
    };

  }

  handleAddTodo = event => {
    event.preventDefault();
    if (!this.state.newTask) {
      return;
    }
    const newTask = {
      id: new Date(),
      task: this.state.newTask,
      completed: false
    };
    this.setState({
      todos: this.state.todos.concat(newTask),
      newTask: ""
    });
  };

  handleChange = e => {
    this.setState({
      newTask: e.target.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    let todoItem = this.refs.newTodoItem.value.trim();
    if (!todoItem) {
      return;
    } else {
      this.props.handleAddTodo(todoItem);
    }
    this.refs.newTodoItem.value = "";
  }

  handleComplete = (id) => {
    this.setState(currState => ({
      todos: currState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    }))
  }

  handleClearCompleted = () => {
    this.setState(currState =>({
      todos: currState.todos.filter(todo => !todo.completed)
    }))
  }

  render() {
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>

      <SearchForm />
      <TodoList
        todos = {this.state.todos}
        handleComplete = {this.handleComplete}
        />
        <TodoForm
          todos={this.state.todos}
          handleSubmit={this.handleSubmit}
          handleAddTodo={this.handleAddTodo}
          handleChange={this.handleChange}
          handleClearCompleted = {this.handleClearCompleted}
        />
      </div>
    );
  }
}

export default App;
