import React, { useEffect, useState } from 'react'
import request from '../../tools/request'
import useThemeContext from '../../hooks/useThemeContext'
import { useParams } from 'react-router-dom'

export default function Post () {
  const [post, setPost] = useState({})
  const theme = useThemeContext()
  const { id } = useParams()

  useEffect(() => {
    request(`/posts/${id}`).then(({ data }) => setPost(data))
  }, [])

  return (
    <div className='content box' style={theme}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}
