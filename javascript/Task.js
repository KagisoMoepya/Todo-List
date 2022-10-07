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

}