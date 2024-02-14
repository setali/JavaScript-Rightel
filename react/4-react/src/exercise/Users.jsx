import React from 'react'
import Table from './Table'

export default class Users extends React.Component {
  state = {
    users: []
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ users: data }))
  }

  columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (el, i, r) => <a href={`/user/${r.id}`}>{el}</a>
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      render: (el, index, record) => `${el.city} ${el.street} ${record.phone} `
    }
  ]

  render () {
    return (
      <div>
        <h2>Users</h2>
        <Table
          data={this.state.users}
          columns={this.columns}
          rowKey={'username'}
        />
      </div>
    )
  }
}
