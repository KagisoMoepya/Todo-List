import { ListsController } from "./ListsController.js";

export const list_items = document.getElementById('list_items')
export const list_item_wrapper = list_items.querySelector('.list_item_wrapper')

const listsController = new ListsController()

/**
* The input for lists when wanting to create a new list
*/
const list_input = document.getElementById('list_name')

/**
 * On 'Enter' a new list gets created and stored
 */
list_input.addEventListener('keyup', (e) => {
    
    if(e.key === 'Enter' && e.target.value !== '') {
        const list_name = list_input.value
        
        listsController.setListsController = list_name
        
        return list_input.value = ''
    }

})