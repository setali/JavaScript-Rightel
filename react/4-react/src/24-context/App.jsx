import { Routes, Route } from 'react-router-dom'
import Providers from './providers'
import Header from './components/share/Header'
import Sidebar from './components/share/Sidebar'
import Footer from './components/share/Footer'
import Home from './components/general/Home'
import About from './components/general/About'
import Contact from './components/general/Contact'
import Posts from './components/post/List'
import Post from './components/post/Detail'
import './assets/styles/main.css'
import Page404 from './components/general/404'
import Login from './components/auth/Login'
import Profile from './components/general/Profile'
import RequireAuth from './components/utils/RequireAuth'
import Dashboard from './components/general/Dashbord'

export default function ContextApp () {
  return (
    <Providers>
      <Header />
      <section className='main'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/posts/:id' element={<Post />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>} />
          <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </section>
      <Footer />
    </Providers>
  )
}
