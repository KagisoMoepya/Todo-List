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

    deleteList(list_index) {
        const new_lists_array = this.listsController.filter(list => list.getListIndex !== list_index)

        for(const [i, list] of new_lists_array.entries()) list.setListIndex = i

        this.listsController = new_lists_array
    }
}