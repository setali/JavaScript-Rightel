import React from 'react'
import ThemeContext from '../../contexts/ThemeContext'

export default function Footer () {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className='box' style={theme}>
          <h2>Footer</h2>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}
