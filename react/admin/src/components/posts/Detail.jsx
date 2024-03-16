import request from '@/tools/request'
import { Divider } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Detail () {
  const [post, setPost] = useState({})

  const { id } = useParams()

  useEffect(() => {
    request(`/posts/${id}`).then(({ data }) => setPost(data))
  })

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <Divider />
      <Link to='/posts'>بازگشت به لیست</Link>
    </div>
  )
}
