import TaskInput from './TaskInput'
import Warning from './Warning'

function Header({tasks}){
    
    return(
        <div>
            <h1>Todo List</h1>
            <TaskInput tasks={tasks}/>
            <Warning tasks={tasks} />
        </div>
    )
}

export default Header