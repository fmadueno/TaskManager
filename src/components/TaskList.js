import TaskItem from './TaskItem';


function TaskList ({tasks}) {
    if (tasks.length === 0){
        return <p>No tasks in this page</p>
    }

    return (
    <ul>
        {tasks.map(task => (
            <TaskItem task={task} />
        ))
        }
    </ul>
    );
}
export default TaskList