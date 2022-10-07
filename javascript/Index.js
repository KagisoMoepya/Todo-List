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
        const list_name = list_input.value
        
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
            const list_data = listsController.getListsController[compared_index]
            const index_bool = target_index === compared_index ? true : false

            if (index_bool) {
                list_data.setActiveStatus = 'active'
                list_DOM.classList.remove('inactive')
                list_DOM.classList.add('active')
                section.innerHTML = list_data.createTasksBoxDOM
            } else {
                list_data.setActiveStatus = 'inactive'
                list_DOM.classList.remove('active')
                list_DOM.classList.add('inactive')
            }
        })

    }

})