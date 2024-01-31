import React, { Component } from 'react'

export default class Counter extends Component {
  state = {
    value: 0
  }

  inc = () => this.setState({ value: this.state.value + 1 })

  dec = () => this.setState({ value: this.state.value - 1 })

  render () {
    return (
      <div>
        <span>{this.state.value}</span>
        <button style={{ marginLeft: '10px' }} onClick={this.inc}>
          Increase
        </button>
        <button onClick={this.dec}>Decrease</button>
      </div>
    )
  }
}
