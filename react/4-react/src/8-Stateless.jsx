import React from 'react'

export default class Users extends React.Component {
  state = {
    users: []
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ users: data }))
  }

  render () {
    return (
      <div>
        {this.state.users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

function User (props) {
  return <div>{props.user.name}</div>
}
