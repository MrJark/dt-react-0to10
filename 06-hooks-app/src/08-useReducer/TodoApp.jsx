import { TodoAdd, TodoList } from "./index";
import { useTodo } from '../hooks';


// Tarea 2: conseguida

export const TodoApp = () => {
    
    const  { todos, todoCount, handleNewTodo, pendingTodoCount, handleDeleteTodo, handleToggleTodo } = useTodo([]);
    
    return (
        <>
            <h1>TodoApp</h1>
            <hr />
            <h2>Done: <small>{todoCount()}</small> - Pending: <small>{pendingTodoCount()}</small></h2>

            <div className="row">
                <div className="col-7">

                    <TodoList 
                        todos = { todos }
                        onDeleteTodo = { id => handleDeleteTodo(id) }
                        onToggleTodo = { handleToggleTodo } 
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
