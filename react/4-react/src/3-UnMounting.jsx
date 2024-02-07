import React, { Component } from 'react'

export default class Parent extends Component {
  state = {
    mount: true
  }

  render () {
    return (
      <div>
        <button onClick={() => this.setState({ mount: !this.state.mount })}>
          {this.state.mount ? 'Unmount' : 'Mount'}
        </button>
        {/* <div style={{ visibility: this.state.mount ? 'visible' : 'hidden' }}>
          <Child />
        </div> */}
        {this.state.mount && <Child />}
      </div>
    )
  }
}

class Child extends Component {
  state = { counter: 1 }

  componentDidMount () {
    console.log('componentDidMount')
    setInterval(() => this.setState({ counter: this.state.counter + 1 }), 1000)
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')
  }

  render () {
    return <div>Child {this.state.counter}</div>
  }
}
