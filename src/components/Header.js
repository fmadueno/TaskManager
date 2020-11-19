import React from "react";
import TaskSearch from "./TaskSearch";
import TaskInput from './TaskInput'
import Warning from './Warning'

function Header(props){
    const tasks = props.tasks;
    const setSearch = props.setSearch;
    const resetPagination = props.resetPagination;
    
    return(
        <section>
            <h1>Todo List</h1>
            <TaskSearch setSearch={setSearch} resetPagination={resetPagination}/>
            <TaskInput tasks={tasks}/>
            <Warning tasks={tasks} />
        </section>
    )
}

export default Header