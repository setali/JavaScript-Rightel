import { COLUMNS } from "../utils/constants"

class User {
  constructor ({ id, username, email, address: _address }) {
    this.id = id
    this.username = username
    this.email = email
    this._address = _address

    this.remove = this.remove.bind(this)
  }

  get address () {
    return `${this._address.city} ${this._address.street}`
  }

  //   remove () {
  //     document.querySelector(`#row-${this.id}`).remove()
  //   }

  remove = () => this.element.remove()

  render () {
    const tr = document.createElement('tr')
    tr.setAttribute('id', `row-${this.id}`)

    this.element = tr

    COLUMNS.forEach(column => {
      const td = document.createElement('td')
      td.textContent = this[column]
      tr.appendChild(td)
    })

    tr.appendChild(this.addRemoveAction())

    return tr
  }

  addRemoveAction = () => {
    const action = document.createElement('td')
    action.textContent = 'x'
    action.style.color = 'red'
    action.style.cursor = 'pointer'
    action.style.padding = '10px'
    // action.addEventListener('click', () => this.remove())
    // action.addEventListener('click', this.remove.bind(this))
    action.addEventListener('click', this.remove)

    return action
  }
}

export default User