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
    console.log(this.state.users)
    return (
      <div>
        <h2>Users</h2>
        <table>
          {this.state.users.map(user => (
            <tr key={user.id}>
              <User user={user} />
            </tr>
          ))}
        </table>
      </div>
    )
  }
}

class User extends React.Component {
  render () {
    const { user } = this.props

    return (
      <>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </>
    )
  }
}
