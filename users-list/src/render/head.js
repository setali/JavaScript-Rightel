import logo from '../assets/images/logo.jpeg'

export default function renderHead () {
  const div = document.createElement('div')
  const h2 = document.createElement('h2')

  h2.textContent = 'Users list'

  const image = document.createElement('img')
  image.setAttribute('src', logo)

  div.appendChild(image)
  div.appendChild(h2)

  return div
}
