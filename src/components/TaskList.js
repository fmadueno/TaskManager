import TaskItem from './TaskItem';
import {useTasks} from "../hooks/useTasks";


function TaskList () {
    const { tasks } = useTasks();

    if (tasks.pageTasks.length === 0){
        return <p>No tasks in this page</p>
    }

    return (
    <ul>
        {tasks.pageTasks.map(task => (      //display page Tasks
            <TaskItem task={task}/>
        ))
        }
    </ul>
    );
}
export default TaskList