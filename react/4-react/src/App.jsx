import React from 'react'
import Counter from './1-Counter'
import Users from './2-Users'

class App extends React.Component {
  render () {
    return (
      <div>
        <Users />
        {/* <Counter defaultValue={10} ali /> */}
        {/* <Counter />
        <Counter />
        <Counter />
        <Counter /> */}
      </div>
    )
  }
}

export default App
