import React from 'react'




export default function TodoForm({ todo, handleChange, handleSubmit, handleAddTodo, handleClearCompleted }) {
  const markAsCompleted = () => {
    handleClearCompleted();
  }
    return (
        <div className = "form-container">
                <form action="" onSubmit = {handleSubmit}>
                    <label htmlFor="todoName">New Todo</label>
                    <input
                        type="text"
                        name="task"
                        id="task"
                        placeholder = "...todo"
                        onChange = {handleChange}
                        value = {todo}
                    />
                    <button type="submit" onClick={handleAddTodo}>Add Todo</button>
                    <button type="reset" onClick = {markAsCompleted}>Clear completed</button>
                </form>
            </div>
    )
}
