import React from 'react';

function Pagination({pagination}){

    return(
        <div>
            {!pagination.isFirstPage && <button onClick={pagination.prevPage}>Prev Page</button>}
            Page {pagination.page + 1} out of {pagination.lastPage}
            {!pagination.isLastPage && <button onClick={pagination.nextPage}>Next Page</button>}
        </div>
    )
}
export default Pagination