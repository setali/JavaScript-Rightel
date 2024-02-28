import React, { useEffect, useRef } from 'react'

export default function UseRef () {
  const myInputRef = useRef()

  useEffect(() => {
    console.log(myInputRef.current.focus())
  }, [])

  return (
    <div>
      <input ref={myInputRef} />
    </div>
  )
}
