function renderHead () {
  const div = document.createElement('div')
  const h2 = document.createElement('h2')

  h2.textContent = 'Users list'

  div.appendChild(h2)

  return div
}
