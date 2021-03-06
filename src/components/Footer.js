import React from "react";
import Pagination from './Pagination'
import { useTasks } from "../hooks/useTasks";

function Footer() {
    const { tasks } = useTasks();
    return(
        <footer>
            <div>
                <strong>{tasks.leftToComplete} tasks left of {tasks.totalTasks} </strong>
            </div>

            <div>
                <button type="button" onClick={tasks.cleanDone}>Clean done</button>
            </div>

            <div>
                <button type="button" onClick={tasks.markAllAsDone}>Mark all as done</button>
            </div>

            <Pagination />

        </footer>
    )
}

export default Footer