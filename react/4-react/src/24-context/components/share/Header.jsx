import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import AuthContext from '../../contexts/AuthContext'

export default function Header () {
  const theme = useContext(ThemeContext)
  const { login, isLoading, isLoggedIn, user, logout } = useContext(AuthContext)

  return (
    <div className='box header' style={theme}>
      <h2>Header</h2>
      <div>
        {isLoggedIn ? (
          <span>
            <span>{user.name}</span>
            <span className='logout' onClick={logout}>
              Logout
            </span>
          </span>
        ) : isLoading ? (
          <span>Loading ...</span>
        ) : (
          <span onClick={login}>Login</span>
        )}
      </div>
    </div>
  )
}
