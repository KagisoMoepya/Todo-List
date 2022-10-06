export class Task {

    /**
     * When a task is being created this class is called
     * @param {*} task_text 
     */
    constructor(task_text) {
        this.task_text = task_text
        this.task_status = 'pending'
    }

}