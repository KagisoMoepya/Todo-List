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
    }

    get getControllerLength() {
        return this.listsController.length
    }
}