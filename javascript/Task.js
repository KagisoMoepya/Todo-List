export class Task {

    /**
     * When a task is being created this class is called
     * @param {*} task_text 
     */
    constructor(task_text, task_index) {
        this.task_text = task_text
        this.task_index = task_index
        this.task_status = 'incomplete'
    }

    get getTaskText() {
        return this.task_text
    }

    get getTaskIndex() {
        return this.task_index
    }

    /**
     * @param {any} task_index
     */
    set setTaskIndex(task_index) {
        this.task_index = task_index
    }

    get getTaskStatus() {
        return this.task_status
    }

    /**
     * @param {string} task_status
     */
    set setTaskStatus(task_status) {
        this.task_status = task_status
    }

    get createTaskDOM() {
        return (`
            <div class="task_selector ${this.task_status}" data-task-order="${this.task_index}">
                <div class="task_circle" data-task-order="${this.task_index}"></div>
                <div class="task_text" data-task-order="${this.task_index}">${this.task_text}</div>
            </div>
        `)
    }

    

}