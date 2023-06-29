import { useReducer } from "react"
import { TodoAdd, TodoList, todoReducer } from "./index";

const initialState = [
    {
        id: new Date().getTime(),
        task: 'Obtener Gema del Alma',
        achieved: false,
    },
    {
        id: new Date().getTime() * 3,
        task: 'Obtener Gema del Poder',
        achieved: true,
    },
];

const handleNewTodo = ( todo ) => {
    console.log({todo});
};

export const TodoApp = () => {

    // solo pasas la rederencia de todoReducer al useReducer para que el mismo la ejecute
    const [ todos, dispatch ] = useReducer(todoReducer, initialState);

    // Tarea: simplificar el layout en varios archivos con funciones sencillas (no conseguida. No estaba centrado y no conseguia hacerla después de 20' )
    return (
        <>
        
            <h1>TodoApp</h1>
            <hr />
            <h2>Hechos: <small>10</small> - Pendientes: <small>2</small></h2>

            <div className="row">
                <div className="col-7">

                    <TodoList 
                        todos = { todos }
                        
                    />

                </div>
                <div className="col-5">
                    <h4>Add TODO</h4>
                    <hr />
                    
                    <TodoAdd
                        onNewTodo = {handleNewTodo}
                    />
                </div>
            </div>

        
        </>
    )
}
