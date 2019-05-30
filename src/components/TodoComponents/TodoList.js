// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from "./Todo"


export default function TodoList({key, todos, handleComplete}) {
  //console.log(todos);
  return (
    <div className = "todos-container">
        {
          todos.map(todo => {
            //console.log(todo);
            return <Todo
              key = {todo.id}
              todo = {todo}
              handleComplete = {handleComplete}
              />
          })
        }
    </div>
  )
}
