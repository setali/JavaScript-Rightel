import User from '../entity/user'
import renderTableHead from './table-head'
import '../assets/css/style.css'
import '../assets/scss/table.scss'

export default function renderTable (users) {
  const table = document.createElement('table')
  table.setAttribute('border', 1)

  table.appendChild(renderTableHead())

  users.forEach(element => {
    const user = new User(element)
    table.appendChild(user.render())
  })

  return table
}
