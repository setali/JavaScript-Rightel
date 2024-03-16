import useAuthContext from '../../hooks/useAuthContext'
import useThemeContext from '../../hooks/useThemeContext'

export default function Dashboard () {
  const theme = useThemeContext()
  const { user } = useAuthContext()

  return (
    <div className='content box' style={theme}>
      <h2>Dashboard</h2>
      <div>Name: {user.name}</div>
      <div>Email: {user.email}</div>
    </div>
  )
}
