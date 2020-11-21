import React from "react";

function TaskInput({tasks}){
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
