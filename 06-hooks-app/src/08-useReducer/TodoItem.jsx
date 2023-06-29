


export const TodoItem = ( { todo, onDeleteTodo } ) => {



    return (
        <>

            <li className="list-group-item d-flex justify-content-between">
                <span className="align-self-center">{ todo.task }</span>
                <button 
                    className="btn btn-danger" 
                    onClick={ () => onDeleteTodo( todo.id ) }
                >
                    Delete</button>
            </li>

        </>
    )
}
