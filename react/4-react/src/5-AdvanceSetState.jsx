import React, { Component } from 'react'

export default class AdvanceSetState extends Component {
  state = {
    todos: [],
    count: 0
  }

  generateTodo () {
    const time = Date.now()

    return {
      title: `Title ${time}`,
      id: time
    }
  }

  componentDidUpdate () {
    console.log('componentDidUpdate')
  }

  addTodo = () => {
    const todo = this.generateTodo()

    this.setState(
      state => ({ todos: [...state.todos, todo] }),
      () => console.log('todos updated')
    )

    this.setState(
      state => ({ count: state.todos.length }),
      () => console.log('Count updated')
    )
  }

  render () {
    console.log('render', this.state.todos.length)
    return (
      <div>
        <button onClick={this.addTodo}>Add todo</button>
        <div>Count: {this.state.count}</div>
        <ol>
          {this.state.todos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ol>
      </div>
    )
  }
}
