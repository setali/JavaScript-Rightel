import { useEffect, useState } from 'react'
import request from '../tools/request'
import { getToken, removeToken, setToken } from '../tools/utils'

export default function useAuth () {
  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  function logon (data) {
    setUser(data)
    setIsLoggedIn(true)
  }

  function login () {
    setIsLoading(true)
    request('/users/1')
      .then(({ data }) => {
        logon(data)
        setToken(data.email)
      })
      .finally(() => setIsLoading(false))
  }

  function getUser () {
    setIsLoading(true)

    request('/users/2', { headers: { Authorization: `Bearer ${getToken()}` } })
      .then(({ data }) => logon(data))
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    getToken() && getUser()
  }, [])

  function logout () {
    setUser({})
    setIsLoggedIn(false)
    removeToken()
  }

  return { user, isLoading, isLoggedIn, login, logout }
}
