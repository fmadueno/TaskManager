import React from 'react';
import {useTasks} from "../hooks/useTasks";

function TaskSearch(){
    const { search } = useTasks();

    return (
        <div>
            <input placeholder={search.text || 'Search here'} onKeyPress={e =>
            {   //Search if we click Enter
                if (e.code === "Enter") {
                    search.doSearch(e.target.value);
                }
            }}/>
            {/*Use if we want search be typed character per character  in search field*/}
            {/*<input placeholder="Search here" value={search} onChange={e => handleSearch(e.target.value)}/>*/}
        </div>
    );
}

export default TaskSearch
