import { useState } from "react";
import { useGetTodoByIdQuery, useGetTodosQuery } from "./store/api"




export const TodoApp = () => {

    // const { data: todos = [], isLoading } = useGetTodosQuery();
    const [todoId, setTodoId] = useState(1)
    const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);
    
    const nextTodo = () => {
        setTodoId( todoId  + 1);
    };
    const prevTodo = () => {
        if( todoId === 1) return;
        setTodoId( todoId  - 1);
    };

    return (
        <>
            <h1>TODOS - RKT</h1>
            <hr />
            <h4>isLoading: { (isLoading) ? 'True' : 'False'}</h4>

            <h2>{JSON.stringify(todo)}</h2>

            <button
                onClick={prevTodo}
            >Prev Todo</button>
            <button
                onClick={nextTodo}
            >New Todo</button>

            {/* <ul>
                {todos.map( todo => (
                    <li key={todo.id}>
                        <strong >{ todo.completed ? 'Done - ' : 'Pending - '}</strong>
                        { todo.title }
                    </li>
                ))}
            </ul>

            <button>Next Todo</button> */}
        </>
    )
}
