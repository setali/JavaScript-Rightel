import React from 'react'

class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      counter: props.defaultValue
    }

    // this.inc = this.inc.bind(this)
  }

  componentDidMount () {
    console.log('componentDidMount')
  }

  componentDidUpdate () {
    console.log('componentDidUpdate')
  }

  componentWillUnmount () {}

  inc () {
    this.setState({ counter: this.state.counter + 1 })
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log(nextState.counter)

    if (nextState.counter % 2 === 1) {
      return false
    }

    return true
  }

  render () {
    console.log('ali')
    return (
      <div>
        <span>{this.state.counter}</span>
        <button onClick={() => this.inc()}>Inc</button>
      </div>
    )
  }
}

Counter.defaultProps = {
  defaultValue: 1
}

export default Counter
