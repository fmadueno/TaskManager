function Warning ({tasks}) {

    const amountOfNotDone = tasks.filter(task => !task.done).length;
    const overworkThreshold = 5;

    const Warn = () => {

        if (amountOfNotDone > overworkThreshold){
            return <div>Cuidado tienes mucho trabajo!</div>
        }
        
        return null;
    }

    return(
        <Warn />
    )
}

export default Warning