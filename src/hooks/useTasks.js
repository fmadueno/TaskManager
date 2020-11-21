import { useState, createContext, useContext } from "react";
import data from "../tasks.json";

const pageSize = 10;  //tasks displayed per page

const getLastId = (tasks) => {
    return tasks.reduce((max, task) => (task.taskId > max ? task.taskId : max),
                                            tasks[0].taskId);
}

const useTaskState = () => {
    //useStates
    const [taskId, setTaskId] = useState(getLastId(data.tasks)+1);    //Max id from task list
    const [tasks, setTasks] = useState(data.tasks);           //Initial tasks
    const [search, setSearch] = useState("");       //User filter
    const [page, setPage] = useState(0);            //Current page displayed

    //Operaciones
    const matchingTasks = tasks.filter(task => task.taskName.toLowerCase().includes(search.toLowerCase())); //Tasks with user search applied
    const lastPage = Math.ceil(matchingTasks.length / pageSize);  //Total pages after applying user search
    const pageTasks = matchingTasks.slice (page * pageSize, (page + 1) * pageSize); //Tasks displayed in current page. User first search, then we paginate.
    const leftToComplete = tasks.filter(task => !task.done).length;  //Total pending tasks

    const cleanDone = () => {
        const tasksToKeep = tasks.filter(task => !task.done);
        setTasks(tasksToKeep);
    }

    const markAllAsDone = () => {
        const tasksDone = tasks.map(task => ({...task, done: true}))
        setTasks([...tasksDone]);
    }

    const addTask = (taskName) => {
        const task = { taskId, done:false, taskName};
        setTasks([task, ...tasks]);
        setTaskId(taskId + 1);
    }

    const deleteTask = (id) => {
        const tasksToKeep = tasks.filter(t => t.taskId !== id)
        setTasks (tasksToKeep);     //It's not necessary use [...tasksToKeep] because filter returns a new array so react render
        //setTasks ([...tasksToKeep]);
    }

    const paginationReset = () => {
        setPage(0);
    }

    const toggleDoneOfTask = (id) => {
        const task = tasks.find((t) => t.taskId === id); //find the task with this id in the array of tasks
        task.done = !task.done;                          //change the completed of that task
        setTasks([...tasks]);                      //notify react that the array of tasks has change, so it will render it again ("[...]")
    }

    const doSearch = (text) => {
        setSearch(text);
        paginationReset();        //reset page
    }

    return {
        search: {
             doSearch: doSearch,
        },
        tasks: {
            leftToComplete,
            totalTasks: tasks.length,
            taskList: tasks,
            matchingTasks,
            pageTasks,
            //setTasks,         No hace falta publicarlo
            cleanDone,
            markAllAsDone,
            addTask,
            deleteTask,
            toggleDoneOfTask
        },
        pagination: {
            pageSize,
            lastPage,
            page,
            isLastPage:  page === lastPage,
            isFirstPage: page === 0,
            nextPage: () => {
                if (page + 1 < lastPage) {// it's not the last page
                    setPage(page + 1);
                }
            },
            prevPage: () => {
                if (page > 0){
                    setPage(page - 1);
                }
            },
            reset: () => paginationReset
            }
    }
};

const TaskContext = createContext();

//It permits all useState inside our App.js being shared. The state is shared between all useStates.
//Each componente that needs the shared state, will import and use useTasks.
export const TaskContextProvider = ({ children }) => {
    const taskState = useTaskState();
    return (<TaskContext.Provider value={taskState}>
        {children}
    </TaskContext.Provider>)
}

//Each time we call useTasks, returns the context defined inside the context which is defined in value={taskState}
export const useTasks = () => {
     return useContext(TaskContext);
};