import { Task } from './Task.js'

export class List {

    /**
     * When a new list is being created, this list is called
     * @param {*} list_name 
     */
    constructor(list_name, list_index) {
        this.list_name = list_name
        this.active_status = 'inactive'
        this.list_index = list_index
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
    get getListIndex () {
        return this.list_index
    }

    /**
     * Sets the position of the list
     * @param {any} list_index
     */
    set setListIndex (list_index) {
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
        this.tasks_array.push(new Task(task_text, this.tasks_array.length))
    }

    /**
     * The function clears all completed tasks inside of tasks_array
     * on clearing the completed tasks, new indexes are assigned to remaining tasks
     */
    clearCompletedTasks() {
        const new_tasks_array = this.tasks_array.filter( task => task.getTaskStatus !== 'completed')

        for(const [i, task] of new_tasks_array.entries()) task.setTaskIndex = i

        this.tasks_array = new_tasks_array
    }

    /**
     * This function will be called 3 times
     * 1) When a list is CLICKED to refresh the data call
     * 2) When a new task is ENTERED into an input
     * 3) When a task is is CLICKED to state completion or incompletion
     * @returns number of incomplete tasks within a list
     */
    remainingTasksCount() {
        let remaining_count = 0
        this.tasks_array.forEach(task => {
            const task_status = task.getTaskStatus

            if(task_status === 'incomplete') remaining_count++
        })

        return remaining_count
    }

    recallListTasksDOM() {
        const tasks = this.tasks_array
        let tasks_DOM_array = []
        let joined_tasks = ''

        tasks.forEach(task => tasks_DOM_array.push(task.createTaskDOM))

        if(tasks.length > 0) {
            joined_tasks = tasks_DOM_array.join('\n');
        }
        return joined_tasks
    }

    get createListDOM() {
        return `
                <div class="list_item_wrapper ${this.active_status}" data-list-index="${this.list_index}">
                    <div class="list_circle"></div>
                    <div class="list_name_selector">${this.list_name}</div>
                </div>
            `
    }

    get createTasksBoxDOM() {
        return (`
            <div id="list_content_container" box-list-index="${this.list_index}">
                <div id="tasks_container">
                    <div class="tasks_count_wrapper">
                        <h3>${this.list_name}</h3>
                        <p class="tasks_remaining">${this.remainingTasksCount()} tasks remaining</p>
                    </div>

                    <div class="tasks_selectors_wrapper">
                        ${this.recallListTasksDOM()}
                    </div>

                    <div class="task_input_wrapper">
                        <span for="list_name" class="material-icons-round">add</span>
                        <input type="text" name="task_input" id="task_input" placeholder="enter a new task">
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