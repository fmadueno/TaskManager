function TaskItem ({task}) {

    return (
        <li>
            <input type="checkbox" id={task.taskId} name={task.taskId} checked={task.done}/>
            <label> {task.taskName} by {task.who} </label>
            <span> X </span>
        </li>
        )
}

export default TaskItem