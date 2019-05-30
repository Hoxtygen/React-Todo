// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, { Component } from 'react'

export default class TodoList extends Component {
    render() {
        return (
            <div className = "todos-container">
                {
                   // console.log(this.props.todos)
                    this.props.todos.map(todoItem => {
                        return <p key = {todoItem.id}>
                                    {todoItem.task} 
                                </p>

                    })
                }
            </div>
        )
    }
}
