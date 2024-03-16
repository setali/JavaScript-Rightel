import { Navigate, useLocation } from 'react-router-dom'
import useAuthContext from '../../hooks/useAuthContext'
import useField from '../../hooks/useField'
import useThemeContext from '../../hooks/useThemeContext'
import Loading from '../utils/Loading'

export default function Login () {
  const theme = useThemeContext()
  const { login, isLoggedIn, isLoading } = useAuthContext()
  const location = useLocation()

  const username = useField()
  const password = useField()

  function handleSubmit (event) {
    event.preventDefault()
    login({ username: username.value, password: password.value })
  }

  if (isLoading) {
    return <Loading />
  }

  if (isLoggedIn) {
    return <Navigate to={location.state.from ?? '/'} />
  }

  return (
    <div className='content box' style={theme}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div className='form-item'>
          <input type='text' {...username} />
        </div>
        <div className='form-item'>
          <input type='text' {...password} />
        </div>
        <div className='form-item'>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  )
}
