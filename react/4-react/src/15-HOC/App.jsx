import React from 'react'
import Button from './Button'
import Tasks from './Tasks'

export default function App () {
  return (
    <div>
      <h2>Task app</h2>

      <Button permission={'ADD_TASK'}>Add task</Button>

      <Tasks permission={'VIEW_TASK_LIST'} />
    </div>
  )
}
