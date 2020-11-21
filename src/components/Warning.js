import {useTasks} from "../hooks/useTasks";

function Warning () {
    //Display warning if not done tasks is over overworkThreshold
    const overworkThreshold = 5;
    const { tasks } = useTasks();

    return(
        <div>
            {/* If condition is false returns right side of condition, else return false*/ }
            {(tasks.leftToComplete > overworkThreshold) && (<p className="Warning"> Cuidado tienes mucho trabajo! </p>)}
        </div>
    )
}
export default Warning