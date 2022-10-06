import { ListsController } from "./ListsController.js";

export const list_items = document.getElementById('list_items')

const listsController = new ListsController()

/**
* The input for lists when wanting to create a new list
*/
const list_input = document.getElementById('list_name')

list_input.addEventListener('keyup', (e) => {
    
    if(e.key === 'Enter' && e.target.value !== '') {
        const list_name = list_input.value
        
        listsController.setListsController = list_name
        console.log(listsController);

        return list_input.value = ''
    }

})