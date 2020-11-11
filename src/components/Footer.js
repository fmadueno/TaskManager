import TaskCounter from './TaskCounter'
import LoadMore from './LoadMore'
import Pagination from './Pagination'

function Footer({tasks, page, pages}){
    
    return(
        <footer>
            <TaskCounter tasks={tasks} />
            <LoadMore tasks={tasks} />
            <Pagination page={page} pages={pages} />
        </footer>
    )
}

export default Footer