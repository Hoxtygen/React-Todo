import React from "react";

export default function Todo({todo, handleComplete}) {
  //console.log(todo);
  const onMarkComplete = (id) => {
    handleComplete(todo.id);
  }
    return (
        <p className={todo.completed ? 'strikethrough' : ""} onClick = {onMarkComplete}>{todo.task}</p>
    )
}
