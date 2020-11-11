import TaskItem from './TaskItem';

function TaskList ({tasks}) {

    if (tasks.length === 0){
        return <p>No hay tareas por completar</p>
    }
    
    const Tasks = () => {

        const taskItem = tasks.map(task => (
            <TaskItem task={task} />
        ));
        return taskItem;
    }


    return (
    <ul>
        <Tasks tasks={tasks}/>    
    </ul>
    );
        
}

export default TaskList