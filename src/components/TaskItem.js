import {useTasks} from "../hooks/useTasks";

function TaskItem ({task}) {

    const { tasks } = useTasks();

    const handleDoneOfTasks = () => {
        //console.log(task);
        tasks.toggleDoneOfTask(task.taskId);
    }

    const handleDeleteTask = () => {
        tasks.deleteTask (task.taskId);
    }

    const handleCloneTask = () => {
        tasks.addTask (task.taskName);
    }

    return (
        <li>

            <input type="checkbox" id={task.taskId} name={task.taskId}
                   checked={task.done}
                   onClick={handleDoneOfTasks}/>
            <label className="TaskText"> {task.taskName} </label>
            {/*{task.imageUrl && <img className="TaskAvatar" src={task.imageUrl}/>};*/}
            <span>
                <button onClick={handleCloneTask}>Clone</button>
                <button onClick={handleDeleteTask}>X</button>
            </span>
        </li>
    )
}

export default TaskItem