import React from 'react'




export default function TodoForm({ taskName, handleChange, handleSubmit, handleAddTodo }) {
    return (
        <div className = "form-container">
                <form action="" onSubmit = {handleSubmit}>
                    <label htmlFor="todoName">New Todo</label>
                    <input
                        //ref = "newTodoItem"
                        type="text" 
                        name="task" 
                        id="task" 
                        placeholder = "...todo" 
                        onChange = {handleChange}
                        value = {taskName}
                    />
                    <button type="submit" onClick={handleAddTodo}>Add Todo</button>
                    <button type="reset">Clear completed</button>
                </form>
            </div>
    )
}