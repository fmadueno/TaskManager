import TaskInput from './TaskInput'
import Warning from './Warning'

function Header({tasks}){
    
    return(
        <div>
            <TaskInput tasks={tasks}/>
            <Warning tasks={tasks} />
        </div>
    )
}

export default Header