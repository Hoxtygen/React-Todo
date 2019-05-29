// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, { Component } from 'react'

export default class TodoList extends Component {
    render() {
        return (
            <div>
                {
                   // console.log(this.props.todos)
                    this.props.todos.map(todoItem => {
                        return <li key = {todoItem.id}>
                                    {todoItem.todoName} 
                                    <span><button>Add</button></span>
                                    <span><button>Delete</button></span>
                                </li>

                    })
                }
            </div>
        )
    }
}
