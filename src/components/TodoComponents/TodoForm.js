import React, { Component } from 'react'

export default class TodoForm extends Component {
    render() {
        return (
            <div>
                <form action="">
                    <label htmlFor="todoName">New Todo</label>
                    <input type="text" name="todoName" id="TodoName"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
