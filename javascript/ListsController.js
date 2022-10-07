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

    /**
     * On Click of a list, a list_index of the list clicked will call the
     * setActiveListOnClick setter which will then loop through the listsController
     * and cast Active to the list clicked and Inactive to all other lists.
     */
    set setActiveListOnClick(list_index) {

    }
}