import TaskItem from './TaskItem';


function TaskList ({tasks}) {
    if (tasks.pageTasks.length === 0){
        return <p>No tasks in this page</p>
    }

    return (
    <ul>
        {tasks.pageTasks.map(task => (      //display page Tasks
            /*<TaskItem task={task} taskList={tasks.taskList} setTasks={tasks.setTasks}/>*/
            <TaskItem task={task} tasks={tasks}/>
        ))
        }
    </ul>
    );
}
export default TaskList