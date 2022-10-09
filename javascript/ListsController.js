import { List } from './List.js'

/**
 * Will contain all the lists and its data
 */
export class ListsController {

    constructor() {
        this.listsController = []
    }

    get getListsController () {
        return this.listsController
    }

    /**
     * When called a new list is entered into the array of listController
     * @param {any} list_name
     */
    set setListsController(list_name) {
        this.listsController.push(new List(list_name, this.getControllerLength))

        this.listsController.forEach(list => {

        })
    }

    get getControllerLength() {
        return this.listsController.length
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    /**
     * When called it removes a list from the listsController
     * Also new indexes are then assigned to the remaining lists
     * @param {*} list_index 
     */
    deleteList(list_index) {
        
        const new_lists_array = this.listsController.filter(list => list.getListIndex !== list_index)

        for(const [i, list] of new_lists_array.entries()) list.setListIndex = i

        this.listsController = new_lists_array
    }

    /**
     * Stacks all the lists in element form
     * these will be placed in the innerHTML
     * @returns joined_lists_DOM
     */
    recallListsDOM() {
        const lists = this.listsController
        let lists_DOM_array = []
        let joined_lists_DOM = ''

        lists.forEach(list => lists_DOM_array.push(list.createListDOM))

        if(lists.length > 0) {
            joined_lists_DOM = lists_DOM_array.join('\n');
        }
        return joined_lists_DOM
    }
}