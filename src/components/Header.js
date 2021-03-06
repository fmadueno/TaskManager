import React from "react";
import TaskSearch from "./TaskSearch";
import TaskInput from './TaskInput'
import Warning from './Warning'
import {useTasks} from "../hooks/useTasks";

function Header(){
    const { tasks, search } = useTasks();

    return(
        <section>
            <h1>Todo List</h1>
            <TaskSearch search={search}/>
            <TaskInput tasks={tasks} setTasks={tasks.setTasks}/>
            <Warning tasks={tasks} />
        </section>
    )
}

export default Header