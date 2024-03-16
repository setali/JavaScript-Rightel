import request from '@/tools/request'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { EyeOutlined } from '@ant-design/icons'
import Table from '@/components/utils/Table'

const columns = [
  { title: 'ID', key: 'id' },
  { title: 'Title', key: 'title' },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <>
        <Link to={`/posts/${record.id}`}>
          <EyeOutlined />
        </Link>
      </>
    )
  }
]
export default function List () {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    request('/posts').then(({ data }) => setPosts(data))
  }, [])

  return (
    <div>
      <h2>Post list</h2>
      <Table data={posts} columns={columns} />
    </div>
  )
}
