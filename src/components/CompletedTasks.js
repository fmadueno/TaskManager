import React from "react";

function DeleteTasks({tasks}){

    //Tasks not done. We must return this list.
    const deleteTasksNotDone = () => {
        return tasks.filter((task) => !task.done);
    }

    return(
        <button type="button" onClick={deleteTasksNotDone}>Delete Done</button>
    )

}

export default DeleteTasks