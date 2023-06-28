import { useReducer } from "react"
import { todoReducer } from "./todoReducer";

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

export const TodoApp = () => {

    // solo pasas la rederencia de todoReducer al useReducer para que el mismo la ejecute
    const [ todos, dispatch ] = useReducer(todoReducer, initialState);

    // Tarea: simplificar el layout en varios archivos con funciones sencillas
  return (
    <>
    
        <h1>TodoApp</h1>
        <hr />
        <h2>Hechos: <small>10</small> - Pendientes: <small>2</small></h2>

        <div className="row">
            <div className="col-7">
                {/* TodoList.jsx */}
                {
                    todos.map( todo => (
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between">
                                <span className="align-self-center">Item 1</span>
                                <button className="btn btn-danger">Delete</button>
                                
                            </li> 
                        </ul>   
                    ))
                }
                {/* TodoList.jsx */}
            </div>
            <div className="col-5">
                <h4>Add TODO</h4>
                <hr />
                {/* TodoAdd.jsx */}
                <form>
                    <input 
                        type="text" 
                        placeholder="What's the task?" 
                        className="form-control" 
                    />
                    <button
                        type="submit"
                        className="btn btn-secondary mt-1"
                    >Add TODO</button>
                </form>
                {/* TodoAdd.jsx */}
            </div>
        </div>

    
    </>
  )
}
