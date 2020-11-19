function TaskCounter({page, leftToComplete}){

    return(
        <strong>{leftToComplete} tasks left of {page} </strong>
    )
}

export default TaskCounter