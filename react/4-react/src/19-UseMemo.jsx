import React, { useEffect, useMemo } from 'react'
import { useState } from 'react'

export default function Parent () {
  const [mount, setMount] = useState(true)

  return (
    <div>
      <button onClick={() => setMount(m => !m)}>
        {mount ? 'Unmount' : 'mount'}
      </button>
      {mount && <Child />}
    </div>
  )
}

function Child () {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setInterval(() => setCount(c => c + 1), 1000)
  }, [])

  function heavyProcess () {
    return (9999999n ** 999999n).toString().length
  }

  const value = useMemo(() => {
    return heavyProcess()
  }, [])

  return (
    <div>
      Count: {count}
      <br />
      Value: {value}
    </div>
  )
}
