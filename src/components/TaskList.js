import TaskItem from './TaskItem';

function TaskList (props) {
    //const items = tasks.map(title => <TaskItem title={title} />)
    
    if (props.tasks.length === 0){
        return <p>No yhay tareas por completar</p>
    }

    return (
        
        //Opción 1
        //<ul>
        //    {props.tasks.map(task => <TaskItem key={task.title} title={task.title} />)}
        //</ul>
        <ul>
            <TaskItem task = {props.tasks[0]}>
                <p>Hola</p>
                <input type = "checkbox" />
            </TaskItem>
        </ul>

        )
}

export default TaskList