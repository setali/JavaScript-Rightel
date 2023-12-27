// var root = document.getElementById('root')
var root = document.querySelector('#root')

var todoList = document.createElement('ol')

var form = document.createElement('form')

form.addEventListener('submit', function (event) {
  event.preventDefault()

  if (!input.value) return

  var value = input.value

  addTodo(value)
  saveTodo(value)

  input.value = ''
})

var input = document.createElement('input')
input.setAttribute('placeholder', 'Todo')

var button = document.createElement('button')
button.setAttribute('type', 'submit')
button.textContent = 'Add'

function addTodo (value) {
  var todo = document.createElement('li')
  todo.textContent = value

  todo.appendChild(deleteIconGenerator(value))

  todoList.appendChild(todo)
}

function deleteIconGenerator (value) {
  var deleteIcon = document.createElement('span')
  deleteIcon.textContent = 'x'
  deleteIcon.style.color = 'red'
  deleteIcon.style.margin = '10px'
  deleteIcon.style.cursor = 'pointer'
  deleteIcon.addEventListener('click', function (event) {
    event.target.parentElement.remove()
    removeTodo(value)
  })

  return deleteIcon
}

function saveTodo (value) {
  var todos = getTodos()
  todos.push(value)
  saveTodos(todos)
}

function removeTodo (value) {
  var todos = getTodos()
  var newTodos = todos.filter(function (todo) {
    return todo !== value
  })

  saveTodos(newTodos)
}

function getTodos () {
  var todos = sessionStorage.getItem('todos')

  return todos ? JSON.parse(todos) : []
}

function saveTodos (todos) {
  sessionStorage.setItem('todos', JSON.stringify(todos))
}

;(function () {
  var todos = getTodos()
  todos.forEach(addTodo)
})()

form.appendChild(input)
form.appendChild(button)

root.appendChild(form)
root.appendChild(todoList)
