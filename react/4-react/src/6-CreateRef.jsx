import React, { Component } from 'react'

export default class CreateRef extends Component {
  state = { show: false, counter: 1 }

  inputRef = React.createRef()

  toggle = () => {
    this.setState(
      state => ({ show: !state.show }),
      () => {
        this.inputRef.current?.focus()
      }
    )
  }

  componentDidMount () {
    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 })
    }, 5000)
  }

  //   componentDidUpdate () {
  //     console.log('salam')
  //     this.inputRef.current?.focus()
  //   }

  render () {
    return (
      <div>
        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.toggle}>
          {this.state.show ? 'Hide' : 'Show'}
        </button>

        {this.state.show && <input ref={this.inputRef} />}
      </div>
    )
  }
}
