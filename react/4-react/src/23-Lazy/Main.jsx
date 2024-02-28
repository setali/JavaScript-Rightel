import React from 'react'

const Heavy = React.lazy(() => import('./Heavy'))

export default function LazyLoad () {
  return (
    <div>
      LazyLoad
      <React.Suspense fallback='Loading ....'>
        <Heavy />
      </React.Suspense>
    </div>
  )
}
