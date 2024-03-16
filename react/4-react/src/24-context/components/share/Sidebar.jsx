import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import { NavLink as Link } from 'react-router-dom'

export default function Sidebar () {
  const theme = useContext(ThemeContext)

  return (
    <div className='box sidebar' style={theme}>
      <h4>Sidebar</h4>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/posts'>Posts</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
      </ul>
    </div>
  )
}
