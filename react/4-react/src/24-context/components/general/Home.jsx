import useAuthContext from '../../hooks/useAuthContext'
import useThemeContext from '../../hooks/useThemeContext'

export default function Home () {
  const theme = useThemeContext()
  const { user, isLoggedIn } = useAuthContext()

  return (
    <div className='content box' style={theme}>
      <h2>HomePage</h2>
      {isLoggedIn && <p>Welcome {user.name}</p>}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit
        reprehenderit cupiditate harum dolorem eum amet quisquam sint! Nihil
        quis ipsam laudantium sit veniam libero provident accusamus quaerat
        dolore aperiam.
      </p>
    </div>
  )
}
