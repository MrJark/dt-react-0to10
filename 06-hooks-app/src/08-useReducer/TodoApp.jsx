import { TodoAdd, TodoList } from "./index";
import { useTodo } from '../hooks';


// Tarea 2: conseguida

export const TodoApp = () => {
    
    const  { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo([]);

    console.log(todos[0].achieved);

    const count = 0;
    for (let i = 0; i < todos.length; i++) {
        const element = todos[i];
        if (element.achieved) {
            count++;
        }
    }
    console.log(count);
    
    return (
        <>
            <h1>TodoApp</h1>
            <hr />
            <h2>Done: <small>{todos.length}</small> - Pending: <small>{  }</small></h2>

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
