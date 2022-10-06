const { Task } = require('./Task.js')

class List {

    /**
     * When a new list is being created, this list is called
     * @param {*} list_name 
     */
    constructor(list_name) {
        this.list_name = list_name
        this.active_status = "inactive"
        this.list_position_number = null
        this.tasks_array = []
    }

    get getActiveStatus () {
        return this.active_status
    }

    /**
     * Sets the list to whether it is active or inactive
     * @param {any} status
     */
    set setActiveStatus (status) {
        this.active_status = status
    }

    /**
     * Gets the position of the list
     */
    get getDataOrder () {
        return this.list_position_number
    }

    /**
     * Sets the position of the list
     * @param {any} list_position_number
     */
    set setDataOrder (list_position_number) {
        this.list_position_number = list_position_number
    }

    get getTasksArray () {
        return this.tasks_array
    }

    /**
     * Inserts a task inside of the array of tasks (tasks_array).
     * @param {any} task_text
     */
    set setTasksArray (task_text) {
        this.tasks_array.push(new Task(task_text))
    }
}