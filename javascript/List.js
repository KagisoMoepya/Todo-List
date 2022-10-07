import { list_items, list_item_wrapper } from './Index.js'
import { Task } from './Task.js'

export class List {

    /**
     * When a new list is being created, this list is called
     * @param {*} list_name 
     */
    constructor(list_name, list_index) {
        this.list_name = list_name
        this.active_status = "inactive"
        this.list_index = list_index
        this.tasks_array = []
        list_items.innerHTML += this.createListDOM
        this.list_item = list_items.querySelectorAll('.list_item_wrapper').item(list_index)
        this.onListClick()
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
        return this.list_index
    }

    /**
     * Sets the position of the list
     * @param {any} list_index
     */
    set setDataOrder (list_index) {
        this.list_index = list_index
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

    onListClick() {
        this.list_item.addEventListener('click', e => {
            

        })
    }
    

    get createListDOM() {
        return `<div class="list_item_wrapper ${this.active_status}" data-list-index="${this.list_index}">
                        <div class="list_circle"></div>
                        <div class="list_name_selector">${this.list_name}</div>
                </div>
            `
    }

    get createTasksBoxDOM() {
        return (`
            <div id="list_content_container">

                <div id="tasks_container">
                    <div class="tasks_count_wrapper">
                        <h3>Testing testing</h3>
                        <p><span class="tasks_count">0</span> tasks remaining</p>
                    </div>
                    
                    <div class="tasks_selectors_wrapper"></div>
        
                    <div class="task_input_wrapper">
                        <span for="list_name" class="material-icons-round">add</span>
                        <input type="text" name="task_input" id="task_input" placeholder="enter a new task" required>
                    </div>
                    
                </div>

                <div class="tasks_buttons">
                    <div class="task_button clear_tasks_btn">Clear completed tasks</div>
                    <div class="task_button delete_list_btn">Delete list</div>
                </div>

            </div>
        `)
    }
}