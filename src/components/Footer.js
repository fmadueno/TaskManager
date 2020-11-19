import React from "react";
import TaskCounter from './TaskCounter'
import LoadMore from './LoadMore'
import Pagination from './Pagination'


function Footer({tasks, pagination}){
    return(
        <footer>
            <div>
                <TaskCounter page={pagination.page} leftToComplete={tasks.leftToComplete} />
                <LoadMore />
            </div>

            <Pagination pagination={pagination}/>

            <div>
                <button type="button">Clear all</button>
            </div>
        </footer>
    )
}

export default Footer