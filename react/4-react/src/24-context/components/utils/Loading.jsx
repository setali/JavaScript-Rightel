import useThemeContext from '../../hooks/useThemeContext'

export default function Loading () {
  const theme = useThemeContext()

  return (
    <div className='content box' style={theme}>
      <h2>Loading ...</h2>
    </div>
  )
}
