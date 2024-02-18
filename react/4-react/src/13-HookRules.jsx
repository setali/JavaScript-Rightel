import React, { useEffect, useState } from 'react'

export default function HookRules () {
  const [count, setCount] = useState(0)

  function func () {
    const [first, setFirst] = useState(1)
  }

  func()

  count && func()

  useEffect(() => {
    const [state, setstate] = useState(5)
  })

  //   if (count % 2) {
  //     return 'salam'
  //   }

  //   const [value, setValue] = useState(1)

  return (
    <div>
      Count: {count}
      <br />
      {/* Value: {value} */}
    </div>
  )
}
