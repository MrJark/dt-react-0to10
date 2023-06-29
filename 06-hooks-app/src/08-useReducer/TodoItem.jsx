


export const TodoItem = ( { todo, onDeleteTodo, onToggleTodo } ) => { // cada función/elemento qeu queires transferir al padre o al hijo, tienes que tenerlo la prop, en este caso, la desestructuración de la prop



    return (
        // añado el onClick en el span para tacchar como completada la tarea. Es decir, cuando lo toque se tachará y la función que voy a crear para ello va a ser el onToggleTodo. Estoy creando la función del hijo al abuelo. 
        <>
            <li className="list-group-item d-flex justify-content-between">
                <button 
                    className="btn-toggle-modi"
                    onClick= { () => onToggleTodo( todo.id) }
                ></button>
                <span 
                    className={ `align-self-center ${ (todo.achieved) ? 'text-decoration-line-through' : ''}`}
                    // onClick= { () => onToggleTodo( todo.id) }
                >{ todo.task }</span>
                <button 
                    className="btn btn-danger" 
                    onClick={ () => onDeleteTodo( todo.id ) }
                >
                    Delete</button>
            </li>

        </>
    )
}
