import TaskCounter from './TaskCounter'
import LoadMore from './LoadMore'

function Footer({tasks}){
    
    
    return(
        <footer>
            <TaskCounter tasks={tasks} />
            <LoadMore tasks={tasks} />
        </footer>
    )
}

export default Footer