import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'

export default function Sidebar () {
  const theme = useContext(ThemeContext)

  return (
    <div className='box sidebar' style={theme}>
      <h4>Sidebar</h4>
      <ul>
        <li>Home</li>
        <li>About</li>
      </ul>
    </div>
  )
}
