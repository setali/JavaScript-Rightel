const root = document.getElementById('root')

const value = document.createElement('span')
value.textContent = 0

const increase = document.createElement('button')
increase.textContent = 'Increase'
increase.addEventListener('click', () => {
  value.textContent = +value.textContent + 1
})
increase.style.marginLeft = '10px'

const decrease = document.createElement('button')
decrease.textContent = 'Decrease'
decrease.addEventListener('click', () => {
  value.textContent = +value.textContent - 1
})

root.appendChild(value)
root.appendChild(increase)
root.appendChild(decrease)
