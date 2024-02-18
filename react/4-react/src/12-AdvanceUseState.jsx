import React, { useEffect, useState } from 'react'

// count  #12ABDF   0
// count  #25FACB   1
export default function AdvanceUseState () {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
  }, [])

  return <div>Count: {count}</div>
}

function Counter () {
  let value = 1

  function inc () {
    value++
  }

  return inc
}
