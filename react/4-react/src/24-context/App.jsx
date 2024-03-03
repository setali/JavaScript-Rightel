import Header from './components/share/Header'
import Sidebar from './components/share/Sidebar'
import Footer from './components/share/Footer'
import './assets/styles/main.css'
import Home from './components/general/Home'
import ThemeProvider from './providers/ThemeProvider'
import AuthProvider from './providers/AuthProvider'

export default function ContextApp () {
  return (
    <div>
      <ThemeProvider>
        <AuthProvider>
          <Header />
          <section className='main'>
            <Sidebar />
            <Home />
          </section>
          <Footer />
        </AuthProvider>
      </ThemeProvider>
    </div>
  )
}
