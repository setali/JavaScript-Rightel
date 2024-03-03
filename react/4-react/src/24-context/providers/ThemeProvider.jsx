import React, { useState } from 'react'
import ThemeContext, { themes } from '../contexts/ThemeContext'

export default function ThemeProvider ({ children }) {
  const [theme, setTheme] = useState(themes.light)

  return (
    <div>
      <div>
        {theme === themes.dark ? (
          <button onClick={() => setTheme(themes.light)}>Light</button>
        ) : (
          <button onClick={() => setTheme(themes.dark)}>Dark</button>
        )}
      </div>
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </div>
  )
}
