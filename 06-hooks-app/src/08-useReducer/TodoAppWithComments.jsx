import { useEffect, useReducer } from "react"
import { TodoAdd, TodoList, todoReducer } from "./index";

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     task: 'Obtener Gema del Alma',
    //     achieved: false,
    // },
    // {
    //     id: new Date().getTime() * 3,
    //     task: 'Obtener Gema del Poder',
    //     achieved: true,
    // },
];

// es la 3a función del useReducer(puede tener cualquier nombre) y es para inicializar el todos con los que ya teníamos en el localStorage
const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || []; // .parse para pasar el string al elemento que era antes, en este caso un objeto. Si no hay nada en el json, que sea un arreglo vacio
}

// Tarea 2: hacer un custom hook (useTodo) donde ponga la lógica pre-return y se quede sencilla la TodoApp
// lo que tengo que extraer y por tanto eliminar de aquí sería: todos, handleNewTodo, handleDeleteTodo, handleToggleTodo
// se tendría que ver tal que así: const  { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo();

export const TodoApp = () => {

    // solo pasas la rederencia de todoReducer al useReducer para que el mismo la ejecute
    const [ todos, dispatch ] = useReducer(todoReducer, initialState, init);

    // Para guardar en Local Storage. Necesitas que cuando los todos (del useReducer) se generen, se guarden el el Local Storage, pro tanto, necesitas a parte de generarlos, que hagan esta otra función
    useEffect(() => {
      // en localstorage solo se pueden guardar strings, no objetos y llos todos son objetos. NEcesitas hacer la transformación
      // localStorage no hay que importarlo ya que viene por defecto en js
      // para grabarlo en el ls como string. El primero es la key, el segundo, el JSON, el value
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    
    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
    
        // con esto añades el action al dispatch
        dispatch(action)
    };

    const handleDeleteTodo = ( id ) => {
        // aquí usas el dispatch para eliminar, dando como mensaje el type y elimiando el todo que tenga el id específico
        
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id  
        }); 
    };

    const handleToggleTodo = ( id ) => {
        // muy parecida a la delete
        // console.log({id});
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id  
        }); 
    };
    

    // Tarea 1: simplificar el layout en varios archivos con funciones sencillas (no conseguida. No estaba centrado y no conseguia hacerla después de 20' )
    return (
        <>
            <h1>TodoApp</h1>
            <hr />
            <h2>Hechos: <small>10</small> - Pendientes: <small>2</small></h2>

            <div className="row">
                <div className="col-7">

                    <TodoList 
                        todos = { todos }
                        onDeleteTodo = { id => handleDeleteTodo(id) }
                        onToggleTodo = { handleToggleTodo } // aquí es donde se crea la función que hará que se tache, el handleToggleTodo
                    />

                </div>

                <div className="col-5">
                    <h4>Add TODO</h4>
                    <hr />
                    
                    <TodoAdd
                        onNewTodo = { handleNewTodo }
                        
                    />
                </div>
            </div>
        </>
    )
}
