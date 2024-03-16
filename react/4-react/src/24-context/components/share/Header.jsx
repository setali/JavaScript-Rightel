import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import AuthContext from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'

export default function Header () {
  const theme = useContext(ThemeContext)
  const { isLoading, isLoggedIn, user, logout } = useContext(AuthContext)

  return (
    <div className='box header' style={theme}>
      <h2>Header</h2>
      <div>
        {isLoggedIn ? (
          <span>
            <span>
              <Link to='/profile'>{user.name}</Link>
            </span>
            <span className='logout' onClick={logout}>
              Logout
            </span>
          </span>
        ) : isLoading ? (
          <span>Loading ...</span>
        ) : (
          <Link to='/login'>Login</Link>
        )}
      </div>
    </div>
  )
}
