function TaskCounter({tasks}){

    let amountOfNotDone = tasks.filter(task => !task.done).length;

    return(
        <div>
            <strong>{amountOfNotDone} tasks left of {tasks.length} </strong>
        </div>
    )
}

export default TaskCounter