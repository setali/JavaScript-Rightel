import React, { useState } from 'react'

export default function TodosUseState () {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([])

  function addTodo (e) {
    e.preventDefault()

    if (task.length > 2) {
      setTodos(todos => [...todos, { id: Date.now(), title: task }])
      setTask('')
    }
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <input value={task} onChange={e => setTask(e.target.value)} />
        <button>Add</button>
      </form>
      <ol>
        {todos.map(todo => (
          <li key={todo.id}> {todo.title}</li>
        ))}
      </ol>
    </div>
  )
}
