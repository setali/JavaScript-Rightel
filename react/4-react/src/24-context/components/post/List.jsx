import React, { useEffect, useState } from 'react'
import request from '../../tools/request'
import useThemeContext from '../../hooks/useThemeContext'
import { Link } from 'react-router-dom'

export default function Posts () {
  const [posts, setPosts] = useState([])
  const theme = useThemeContext()

  useEffect(() => {
    request('/posts').then(({ data }) =>
      setPosts(data)
    )
  }, [])

  return (
    <div className='content box' style={theme}>
      <h2>Posts list</h2>
      <ol>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  )
}
