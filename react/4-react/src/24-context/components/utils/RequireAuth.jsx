import React from 'react'
import useAuthContext from '../../hooks/useAuthContext'
import Loading from './Loading'
import { Navigate, useLocation } from 'react-router-dom'

export default function RequireAuth ({ children }) {
  const { isLoggedIn, isLoading } = useAuthContext()
  const location = useLocation()

  if (isLoading) {
    return <Loading />
  }

  if (isLoggedIn) {
    return children
  }

  return <Navigate to='/login' state={{ from: location.pathname }} />
}
