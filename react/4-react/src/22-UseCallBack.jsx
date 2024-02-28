import React, { useEffect, useState, useCallback } from 'react'

export default function UseCallBack () {
  const [count, setCount] = useState(0)
  const [height, setHeight] = useState()

  useEffect(() => {
    setInterval(() => setCount(c => c + 1), 3000)
  }, [])

  const myInputRef = useCallback(function (node) {
    node?.focus()
  }, [])

  const h2Ref = useCallback(node => {
    setHeight(parseInt(node.getBoundingClientRect().height))
  }, [])

  return (
    <div>
      <h2 ref={h2Ref}>Hello</h2>
      Height: {height}
      <hr />
      <input ref={myInputRef} />
      <br />
      Count: {count}
    </div>
  )
}
