import React from 'react';

function TaskSearch({search}){

    return (
        <div>
            <input placeholder="Search here" onKeyPress={e =>
            {   //Hace que la búsqueda se haga sólo si pulsamos Enter.
                if (e.code === "Enter") {
                    search.doSearch(e.target.value);
                }
            }}/>
            {/*Si queremos que la búsqueda se haga en cada carácter insertado en el campo search*/}
            {/*<input placeholder="Search here" value={search} onChange={e => handleSearch(e.target.value)}/>*/}
        </div>
    );
}

export default TaskSearch
