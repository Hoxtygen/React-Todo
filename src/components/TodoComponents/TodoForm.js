import React, { Component } from 'react'

export default class TodoForm extends Component {
    constructor(props)  {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            todoName: e.target.value
        })
    }


    render() {
        return (
            <div>
                <form action="">
                    <label htmlFor="todoName">New Todo</label>
                    <input type="text" name="todoName" id="TodoName" placeholder = "...todo" onChange = {this.handleChange}/>
                    <button type="submit">Add Todo</button>
                    <button type="reset">Clear completed</button>
                </form>
            </div>
        )
    }
}
