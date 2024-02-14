import React, { useState } from 'react'

export default function Com () {
  const [value, setValue] = useState(() => {
    return (99999n ** 9999999n).toString().length
  })
  //   const [value, setValue] = useState((99999n ** 9999999n).toString().length) // Wrong

  const [count, setCount] = useState(10)

  console.log('render', value, count)

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(count + 5)}>+</button>
      <br />
      Value: {value}
      <button onClick={() => setValue(value + 1)}>+</button>
    </div>
  )
}
