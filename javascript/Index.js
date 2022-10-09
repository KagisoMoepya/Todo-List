import { ListsController } from "./ListsController.js";

/**
 * New Instance of the list controller
 */
const listsController = new ListsController()

/**
 * A Div that contains all the Lists
 */
const list_items = document.getElementById('list_items')

/**
 * The input for lists when wanting to create a new list
 */
const list_input = document.getElementById('list_name')

/**
 * Section contains the List Tasks Box
 */
const section = document.querySelector('section')

/**
 * On 'Enter' a NEW List gets created and stored
 */
list_input.addEventListener('keyup', (e) => {
    
    if(e.key === 'Enter' && e.target.value !== '') {
        const list_name = listsController.capitalizeFirstLetter(list_input.value)
        
        listsController.setListsController = list_name
        const list = listsController.getListsController[listsController.getControllerLength - 1]
        list_items.innerHTML += list.createListDOM
        return list_input.value = ''
    }

})

/**
 * On Click selects a List to view and show a Tasks Box
 */
list_items.addEventListener('click', e => {
    const list_item_wrapper = list_items.querySelectorAll('.list_item_wrapper')
    const list_item = e.target

    if(e.target.hasAttribute('data-list-index')) {
        const target_index = list_item.getAttribute('data-list-index')

        list_item_wrapper.forEach(list_DOM => {
            const compared_index = list_DOM.getAttribute('data-list-index')
            const list_data = listsController.getListsController[compared_index] // A Single list
            const index_bool = target_index === compared_index ? true : false

            if (index_bool) {
                list_data.setActiveStatus = 'active'
                list_DOM.classList.remove('inactive')
                list_DOM.classList.add('active')
                section.innerHTML = list_data.createTasksBoxDOM

                createNewTask(section, list_data)
                onTaskClick(section, list_data)
                clearCompletedTasks(section, list_data)

            } else {
                list_data.setActiveStatus = 'inactive'
                list_DOM.classList.remove('active')
                list_DOM.classList.add('inactive')
            }
        })
    }
})

function createNewTask(section, list_data) { // List data means a single list
    const tasks_remaining_count = section.querySelector('.tasks_remaining')
    const task_input = section.querySelector('#task_input')
    const tasks_selectors_wrapper = section.querySelector('.tasks_selectors_wrapper')
    const tasks_array = list_data.getTasksArray

    task_input.addEventListener('keyup', (e) => {
    
        if(e.key === 'Enter' && e.target.value !== '') {
            const task_text = listsController.capitalizeFirstLetter(task_input.value)

            list_data.setTasksArray = task_text

            const task_index = list_data.getTasksArray.length - 1
            const task = list_data.getTasksArray[task_index]
            
            tasks_remaining_count.innerHTML = `${list_data.remainingTasksCount()} tasks remaining`
            tasks_selectors_wrapper.innerHTML += task.createTaskDOM
            onTaskClick(section, list_data)
            return task_input.value = ''
        }
    })
}

function onTaskClick(section, list_data) {
    const tasks_selectors_wrapper = section.querySelector('.tasks_selectors_wrapper')
    const tasks_remaining = section.querySelector('.tasks_remaining')
    const task_selector = tasks_selectors_wrapper.querySelectorAll('.task_selector')
    const tasks_array = list_data.getTasksArray

    task_selector.forEach(taskDOM => {
        tasks_selectors_wrapper.addEventListener('click', e => {
            const task_index = taskDOM.getAttribute('data-task-order')
            const task = tasks_array[task_index]
            const task_target = e.target

            if(taskDOM.contains(task_target) && taskDOM.classList.contains('incomplete')) {
                taskDOM.classList.remove('incomplete')
                taskDOM.classList.add('completed')
                task.setTaskStatus = 'completed'
                tasks_remaining.innerHTML = `${list_data.remainingTasksCount()} tasks remaining`
            } else if(taskDOM.contains(task_target) && taskDOM.classList.contains('completed')) {
                taskDOM.classList.remove('completed')
                taskDOM.classList.add('incomplete')
                task.setTaskStatus = 'incomplete'
                tasks_remaining.innerHTML = `${list_data.remainingTasksCount()} tasks remaining`
            }

        })
    })
} 

function clearCompletedTasks(section, list_data) {
    const tasks_selectors_wrapper = section.querySelector('.tasks_selectors_wrapper')
    const clear_tasks_btn = section.querySelector('.clear_tasks_btn')

    clear_tasks_btn.addEventListener('click', e => {

        list_data.clearCompletedTasks()
        tasks_selectors_wrapper.innerHTML = list_data.recallList()
        onTaskClick(section, list_data)

    })
}
