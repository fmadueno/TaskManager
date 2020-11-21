import React from "react";
import {useTasks} from "../hooks/useTasks";

function TaskInput(){
    const { tasks } = useTasks();
    return (
        <div>
            <input placeholder="Comprar leche" onKeyPress={e => {
                if (e.code === 'Enter') {
                    tasks.addTask(e.target.value);
                }
            }} />
        </div>
    )
}

export default TaskInput
