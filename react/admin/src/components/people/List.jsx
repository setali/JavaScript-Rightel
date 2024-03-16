import request from '@/tools/request'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { EyeOutlined } from '@ant-design/icons'
import Table from '@/components/utils/Table'

const columns = [
  { title: 'id', key: 'id' },
  { title: 'Name', key: 'name' },
  { title: 'Username', key: 'username' },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <>
        <Link to={`/people/${record.id}`}>
          <EyeOutlined />
        </Link>
      </>
    )
  }
]

export default function List () {
  const [people, setPeople] = useState([])

  useEffect(() => {
    request('/users').then(({ data }) => setPeople(data))
  }, [])

  return (
    <div>
      <h2>People list</h2>
      <Table data={people} columns={columns} />
    </div>
  )
}
