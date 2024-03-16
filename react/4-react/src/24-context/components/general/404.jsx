import useThemeContext from '../../hooks/useThemeContext'

export default function Page404 () {
  const theme = useThemeContext()

  return (
    <div className='content box' style={theme}>
      <h2>404</h2>
      <p>Page not Found</p>
    </div>
  )
}
