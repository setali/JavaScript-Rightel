function renderTable (users) {
  const table = document.createElement('table')
  table.setAttribute('border', 1)
  table.setAttribute('width', '100%')

  table.appendChild(renderTableHead())

  users.forEach(element => {
    const user = new User(element)
    table.appendChild(user.render())
  })

  return table
}
