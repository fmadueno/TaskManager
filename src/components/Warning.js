function Warning ({tasks}) {

    const amountOfNotDone = tasks.filter(task => !task.done).length;
    //Si la cantidad de tareas not done supera este número mostrar aviso
    const overworkThreshold = 5;

    return(
        <div>
            {/* Si condición es falsa devuelve parte derecha de &&, sino devuelve falso*/ }
            {(amountOfNotDone > overworkThreshold) && (<p className="Warning"> Cuidado tienes mucho trabajo! </p>)}
        </div>
    )
}
export default Warning