
export function boxStructure() {

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