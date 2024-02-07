import React, { Component } from 'react'

export default class Form extends Component {
  state = {
    username: 'Ali',
    password: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this)
  }

  render () {
    console.log(this.state)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              name='username'
              value={this.state.username}
              onChange={e => this.setState({ username: e.target.value })}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              name='password'
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
