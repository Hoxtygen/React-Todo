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
                    <input type="text" name="todoName" id="TodoName" onChange = {this.handleChange}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
