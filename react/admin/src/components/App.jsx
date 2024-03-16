import React from 'react'
import { ConfigProvider, Layout } from 'antd'
import Header from './general/Header'
import Footer from './general/Footer'
import Sidebar from './general/Sidebar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Dashboard from './general/Dashboard'
import PostRouter from './posts/Router'
import PeopleRouter from './people/Router'
import '@/assets/style.css'

const { Content } = Layout

function App () {
  return (
    <div>
      <ConfigProvider direction='rtl'>
        <Router>
          <Layout>
            <Header />
            <Layout>
              <Sidebar />
              <Content className='main'>
                <Routes>
                  <Route path='/' element={<Dashboard />} />
                  <Route path='/posts/*' element={<PostRouter />} />
                  <Route path='/people/*' element={<PeopleRouter />} />
                </Routes>
              </Content>
            </Layout>
            <Footer />
          </Layout>
        </Router>
      </ConfigProvider>
    </div>
  )
}

export default App
