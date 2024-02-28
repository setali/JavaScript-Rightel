import React, { useReducer, useState } from 'react'

function reducer (state, { type, payload }) {
  switch (type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), title: payload }]

    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== payload)

    default:
      return state
  }
}

function addTodoAction (payload) {
  return { type: 'ADD_TODO', payload }
}

function removeTodoAction (payload) {
  return { type: 'REMOVE_TODO', payload }
}

export default function TodosUseState () {
  const [task, setTask] = useState('')
  const [todos, dispatch] = useReducer(reducer, [])

  function addTodo (e) {
    e.preventDefault()

    if (task.length > 2) {
      dispatch(addTodoAction(task))
      setTask('')
    }
  }

  function removeTodo (id) {
    dispatch(removeTodoAction(id))
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <input value={task} onChange={e => setTask(e.target.value)} />
        <button>Add</button>
      </form>
      <ol>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title}
            <span
              style={{ color: 'red', padding: '10px', cursor: 'pointer' }}
              onClick={() => removeTodo(todo.id)}
            >
              x
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}
