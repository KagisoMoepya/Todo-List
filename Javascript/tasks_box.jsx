const tasks_selectors_wrapper = document.querySelectorAll('tasks_selectors_wrapper')

function createTaskSelector(textContent) {
    const tasks_len = tasks_selectors_wrapper.length + 1

    const task_selector = document.createElement('div')
    const task_circle = document.createElement('div')
    const task_text = document.createElement('div')

    task_selector.setAttribute('data-task-order', tasks_len)
    task_circle.setAttribute('data-task-order', tasks_len)
    task_text.setAttribute('data-task-order', tasks_len)
}