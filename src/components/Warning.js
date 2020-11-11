function Warning ({tasks}) {

    let amountOfNotDone = tasks.filter(task => !task.done).length;
    const overworkThreshold = 5;

    const Warn = () => {

        if (amountOfNotDone > overworkThreshold){
            return <div>Cuidado tienes mucho trabajo!</div>
        }
    }

    return(
        <Warn />
    )
}

export default Warning