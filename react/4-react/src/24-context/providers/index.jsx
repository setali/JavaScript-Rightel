import { BrowserRouter as Router } from 'react-router-dom'
import ThemeProvider from './ThemeProvider'
import AuthProvider from './AuthProvider'

export default function Providers ({ children }) {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>{children}</AuthProvider>
      </ThemeProvider>
    </Router>
  )
}
