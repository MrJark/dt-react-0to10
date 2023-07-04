import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';


export const useTodo = () => {
    const initialState = [];


    const init = () => {
        return JSON.parse( localStorage.getItem('todos')) || []; 
    };

    const [ todos, dispatch ] = useReducer(todoReducer, initialState, init);

   
    useEffect(() => {

      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    
    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
    
        dispatch(action)
    };

    const handleDeleteTodo = ( id ) => {
        
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id  
        }); 
    };

    const handleToggleTodo = ( id ) => {

        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id  
        }); 
    };

    // Tarea: crear todoCount y pendingTodoCount para ponerlos en el html y que diga que tareas faltas y cuantas tengo en total
    const todoCount = () => {
        return todos.length;
    };

    const pendingTodoCount = () => {
        return todos.filter( todo => !todo.achieved).length
    };

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todoCount,
        pendingTodoCount,
    }
}