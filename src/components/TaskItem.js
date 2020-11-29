import {useTasks} from "../hooks/useTasks";
import React from "react";

function TaskItem ({task}) {
    const { tasks } = useTasks();

    const handleDoneOfTasks = () => {
        tasks.toggleDoneOfTask(task.id);
    }

    const handleDeleteTask = () => {
        tasks.deleteTask (task.id);
    }

    const handleCloneTask = () => {
        tasks.addTask (task.title);
    }

    return (
        <li key={task.id.toString()}>
            <input type="checkbox"
                   checked={task.completed}
                   onChange={handleDoneOfTasks}/>
            <label className="TaskText"> {task.title} </label>
            {/*{task.imageUrl && <img className="TaskAvatar" src={task.imageUrl}/>};*/}
            <span>
                <button onClick={handleCloneTask}>Clone</button>
                <button onClick={handleDeleteTask}>X</button>
            </span>
        </li>
    )
}

export default TaskItem