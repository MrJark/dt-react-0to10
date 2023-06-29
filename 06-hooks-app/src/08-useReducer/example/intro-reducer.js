/**
 * Reducer
 * 
 *  1. Necesitas un valor inicial, initialState
 *  2. Creas la función reduce que tiene dos argumentos:
 *      2.1. Estado inicial, state, que es igual al initialState
 *      2.2. La acción que queires que haga, action, que si no hay nada, es una arreglo vacio (para que no de errores)
 *     y que devuelve el state, ya sea el nuevo o si no hay ninguno, el de default, el initialValue
 *  3. Creas el newTodo o la acción que quieras añadari
 *  4. Creas una acción, addTodoAction, que tenga el type, como convención es '[TODO] add todo' y el payload, que es lo qeu va a cargar que es el newTodo o la función que has creado que quieres añadir
 *  5. Creas un let que sea igual a la función reduce, todoReducer qeu será la a la cual llames para añadirle la nueva acción, parecido al método .push(), el cual no debes usar
 *  6. Añades a la acción creada, a través de la variable let, la nueva variable/función/elemento la cual tendrá dos argumentos:
 *      6.1. La propua variabe let
 *      6.2. La acción que queires que realice o añada, addTodoAction
 */

const initialState = [
    {
        id: 1,
        todo: 'Gema del Alma',
        achieved: false,
    },
];


// reducer = función común con dos argumentos: estado inicial = state que es lo que se retorna y la acción, el action
const todoReducer = ( state = initialState, action = {} ) => {

    if (action.type === '[TODO] add todo') {
        return[ ...state, action.payload ];
    }

    return state;
};

let todos = todoReducer();

// esto no se debe hacer, una mala practica, ya que los reduces, una de sus condiciones es que no se pueden mutar
// todos.push(
//     {
//         id: 2,
//         todo: 'Gema del Poder',
//         achieved: true,
//     }
// )

//la buena práctica
const newTodo = {
    id: 2,
    todo: 'Gema del Poder',
    achieved: true,
};

// acción típica que se le manda al redicer con esos dos elementos(es el estandar), type y payload
const addTodoAction = { 
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer(todos, addTodoAction); // reducer que se le manda estado inicial, todos, y la acción, addTodoAction
console.log(todos);