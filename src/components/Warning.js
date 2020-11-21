function Warning ({tasks}) {

    //Si la cantidad de tareas not done supera este número mostrar aviso
    const overworkThreshold = 5;

    return(
        <div>
            {/* Si condición es falsa devuelve parte derecha de &&, sino devuelve falso*/ }
            {(tasks.leftToComplete > overworkThreshold) && (<p className="Warning"> Cuidado tienes mucho trabajo! </p>)}
        </div>
    )
}
export default Warning