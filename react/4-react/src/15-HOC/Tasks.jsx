import React from 'react'
import Button from './Button'
import ACL from './ACL'

const tasks = [
  { id: 1, title: 'Task 1' },
  { id: 2, title: 'Task 2' },
  { id: 3, title: 'Task 3' },
  { id: 4, title: 'Task 4' }
]

function Tasks () {
  return (
    <div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title}
            <Button permission='EDIT_TASK'>Edit</Button>
            <Button permission='DELETE_TASK'>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ACL(Tasks)
