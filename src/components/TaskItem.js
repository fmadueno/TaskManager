function TaskItem ({task}) {

    //Esta función se sustituye por {task.imageUrl...} dentro de <li>
    //const TaskAvatar = ({imageUrl}) => {
        //Si condición es falso, devuelve falso y sino devuelve parte derecha del &&
        //Igual a return imageUrl !== undefined ? (<img className="TaskAvatar" src={imageUrl}/>) : null;
    //    return imageUrl !== undefined && (<img className="TaskAvatar" src={imageUrl}/>);
    //}

    return (
        <li>
            <input type="checkbox" id={task.taskId} name={task.taskId} checked={task.done}/>
            <label className="TaskText"> {task.taskName} by {task.who} </label>
            {/* https://reactjs.org/docs/conditional-rendering.html - Equivale a función TaskAvatar anterior*/}
            {task.imageUrl && <img className="TaskAvatar" src={task.imageUrl}/>};
            <span> X </span>
        </li>
        )
}

export default TaskItem