import React, { Component, PureComponent } from 'react'

export default class Parent extends Component {
  state = {
    counter1: 0,
    counter2: 0
  }

  render () {
    console.log('Parent')
    return (
      <div>
        <div>Counter1: {this.state.counter1}</div>
        <div>Counter2: {this.state.counter2}</div>

        <button
          onClick={() => this.setState({ counter1: this.state.counter1 + 1 })}
        >
          Change Counter 1
        </button>

        <button
          onClick={() => this.setState({ counter2: this.state.counter2 + 1 })}
        >
          Change Counter 2
        </button>

        <MyComponent counter={{ value: this.state.counter1 }} />
        <MyPureComponent counter={{ value: this.state.counter1 }} />
      </div>
    )
  }
}

class MyComponent extends Component {
  shouldComponentUpdate (nextProps, nextState) {
    if (nextProps.counter.value !== this.props.counter.value) {
      return true
    }
    return false
  }

  render () {
    console.log('MyComponent', this.props.counter)
    return <div>MyComponen: {this.props.counter.value}</div>
  }
}

class MyPureComponent extends PureComponent {
  render () {
    console.log('MyPureComponent', this.props.counter)
    return <div>MyPureComponent</div>
  }
}
