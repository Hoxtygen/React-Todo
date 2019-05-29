import React from 'react';
import "./components/TodoComponents/Todo.css"
import Todo from './components/TodoComponents/Todo';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);
    this.state = {
      task: "",
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
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  

  handleAddTodo(task){
    let newTodo = {
      id: new Date(),
      task: task,
      completed: false
    }
    this.setState({
      todos: this.state.todos.concat(newTodo),
      completed: false
		});
  }

  handleChange(e) {
    this.setState({
        task: e.target.value
    })
}

handleSubmit(e)     {
    e.preventDefault();
    let todoItem = this.refs.newTodoItem.value.trim();
    if (!todoItem) {
        return
    } else {
        this.props.handleAddTodo(todoItem);
    }
    this.refs.newTodoItem.value = "";
}
  

  render() {
    return (
      <div className = "App">
        <h2>Welcome to your Todo App!</h2>
        <Todo 
          { ...this.state }
          handleAddTodo = {this.handleAddTodo}
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
        />
       
      </div>
    );
  }
}

export default App;
