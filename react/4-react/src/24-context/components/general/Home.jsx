import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import AuthContext from '../../contexts/AuthContext'

export default function Home () {
  const theme = useContext(ThemeContext)
  const { user, isLoggedIn } = useContext(AuthContext)

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
