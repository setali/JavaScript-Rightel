import React, { useState, useEffect } from 'react'

export default function Parent () {
  const [mount, setMount] = useState(true)

  return (
    <div>
      <button onClick={() => setMount(!mount)}>
        {mount ? 'UnMount' : 'Mount'}
      </button>
      {mount && <MyComponent />}
    </div>
  )
}

function MyComponent () {
  const [count, setCount] = useState(1)
  const [state, setState] = useState(0)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setState(state + 1)
    }, 10000)

    console.log('Out', timeoutId, state)
    // Cleanup function
    return () => {
      console.log('In', timeoutId, state)
      clearTimeout(timeoutId)
    }
  }, [state])

  //cDM
  useEffect(() => {
    // console.log('ComponentDidMount')
  }, [])

  // cDM, cDU
  useEffect(() => {
    // console.log(count)
  }, [count])

  // cWU
  useEffect(() => {
    return () => {
      //   console.log('ComponentWillUnMount')
    }
  }, [])

  //   console.log('render')
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <br />
      State: {state}
    </div>
  )
}
