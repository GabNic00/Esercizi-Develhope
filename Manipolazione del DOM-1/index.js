const addProduct = () => {
  const task = document.getElementById('task')
  const ul = document.querySelector('ul')
  const li = document.createElement('li')
  const checkbox = document.createElement('input')

  checkbox.type = 'checkbox'
  li.appendChild(checkbox)

  const taskText = document.createTextNode(task.value)
  li.appendChild(taskText)
  ul.appendChild(li)
};
