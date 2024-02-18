import React, { useState } from 'react'

function useField (defaultValue = '') {
  const [value, setValue] = useState(defaultValue)

  console.log(value)

  return {
    value,
    onChange: e => setValue(e.target.value)
  }
}

export default function CustomHook () {
  const username = useField('ali')
  const password = useField('123')

  return (
    <div>
      <form>
        <input type='text' {...username} />

        <input type='text' {...password} />
      </form>
    </div>
  )
}
