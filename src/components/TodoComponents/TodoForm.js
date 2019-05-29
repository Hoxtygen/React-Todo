import React, { Component } from 'react'

export default class TodoForm extends Component {
    render() {
        const {handleAddTodo, handleChange, handleSubmit } = this.props;
        //console.log(handleSubmit)
        return (
            <div className = "form-container">
                <form action="" onSubmit = {this.handleSubmit}>
                    <label htmlFor="todoName">New Todo</label>
                    <input
                        ref = "newTodoItem"
                        type="text" 
                        name="task" 
                        id="task" 
                        placeholder = "...todo" 
                        onChange = {this.props.handleChange}
                    />
                    <button type="submit" onClick={this.props.handleAddTodo}>Add Todo</button>
                    <button type="reset">Clear completed</button>
                </form>
            </div>
        )
    }
}
