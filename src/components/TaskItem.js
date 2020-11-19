function TaskItem ({task}) {

    return (
        <li>
            <input type="checkbox" id={task.taskId} name={task.taskId} checked={task.done}/>
            <label className="TaskText"> {task.taskName} </label>
            {/*{task.imageUrl && <img className="TaskAvatar" src={task.imageUrl}/>};*/}
            <span>
                {/*<button onClick={() => {setTasks([...tasks, {}])}}>Clone</button>*/}
                {/*<button onClick={() => {setTasks([])}}>X</button>*/}
                <button>Clone</button>
                <button>X</button>
            </span>
        </li>
        )
}

export default TaskItem