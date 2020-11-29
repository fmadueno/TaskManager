import { useState, useEffect, createContext, useContext } from "react";

const pageSize = 10;  //tasks displayed per page

// Requests URL
async function request(url) {
    const response = await fetch(url);
    return response.json();
}


async function getTasks() {
    return request("https://jsonplaceholder.typicode.com/todos");
}

const getLastId = (tasks) => {
    return tasks.reduce((max, task) => (task.id > max ? task.id : max),0);
}

const useTaskState = () => {
    //useStates
    const [tasks, setTasks] = useState([]);                 //Initial tasks
    const [id, setId] = useState(getLastId(tasks) + 1);    //Max id from task list
    const [search, setSearch] = useState(localStorage.getItem("search") || "");    //User filter
    const [page, setPage] = useState(0);                  //Current page displayed

    //Operations
    const matchingTasks = tasks.filter(task => task.title.toLowerCase().includes(search.toLowerCase())); //Tasks with user search applied
    const lastPage = Math.ceil(matchingTasks.length / pageSize);  //Total pages after applying user search
    const pageTasks = matchingTasks.slice (page * pageSize, (page + 1) * pageSize); //Tasks displayed in current page. User first search, then we paginate.
    const leftToComplete = tasks.filter(task => !task.completed).length;  //Total pending tasks

    const cleanDone = () => {
        const tasksToKeep = tasks.filter(task => !task.completed);
        setTasks(tasksToKeep);
    }

    const markAllAsDone = () => {
        const tasksDone = tasks.map(task => ({...task, completed: true}))
        setTasks([...tasksDone]);
    }

    const addTask = (title) => {
        const task = { id, completed:false, title};
        setTasks([task, ...tasks]);
        //setTaskId(taskId + 1);
        setId(id + 1);
    }

    const deleteTask = (id) => {
        const tasksToKeep = tasks.filter(t => t.id !== id)
        setTasks (tasksToKeep);     //It's not necessary use [...tasksToKeep] because filter returns a new array so react render
        //setTasks ([...tasksToKeep]);
    }

    const paginationReset = () => {
        setPage(0);
    }

    const toggleDoneOfTask = (id) => {
        const task = tasks.find((t) => t.id === id); //find the task with this id in the array of tasks
        task.completed = !task.completed;                          //change the completed of that task
        setTasks([...tasks]);                      //notify react that the array of tasks has change, so it will render it again ("[...]")
    }

    const doSearch = (text) => {
        setSearch(text);
        paginationReset();        //reset page
    }

    //useEffects
    //Display page title
    useEffect(() => {
        document.title = `You have ${leftToComplete} tasks to complete`;
    },[leftToComplete]);

    //Stores the text of search each new search
    useEffect(() => {
        localStorage.setItem('search', String(search));
    }, [search]);

    //Get the task list
    useEffect(() => {
            getTasks().then((newTasks) => {
                setTasks(newTasks);
            });
    }, []);

    return {
        search: {
            doSearch: doSearch,
            text: search
        },
        tasks: {
            leftToComplete,
            totalTasks: tasks.length,
            taskList: tasks,
            matchingTasks,
            pageTasks,
            //setTasks,         No need to publish
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