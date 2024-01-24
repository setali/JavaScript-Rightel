import renderHead from './head'
import renderTable from './table'
import '../assets/css/page.css'

export default function renderPage (users) {
  const root = document.getElementById('root')

  root.appendChild(renderHead())
  root.appendChild(renderTable(users))
}
