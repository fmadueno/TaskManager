function TaskItem (props) {

        return (
            <li>{props.title} <input type="checkbox" checked={props.completed} /></li>
        )

}

export default TaskItem