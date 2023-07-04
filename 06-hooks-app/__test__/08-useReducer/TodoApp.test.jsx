import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer';
import { useTodo } from '../../src/hooks/useTodo';

// el mock aquí es para saber si el componente que testeo está siendo renderizado bien. Ej: cómo sabes que hay cero todos? O si es el estado por default del elemento? Para esto te ayuda
jest.mock('../../src/hooks/useTodo');

describe('test in TodoApp', () => {

    useTodo.mockReturnValue({ // este return es el estado específico del useTodo que quieres que tenga una vez ha sido llamado
        todos: [
            { id: 1, task: 'Do the bed', achieved: false  },
            { id: 2, task: 'Write the letter', achieved: false },
        ], 
        todoCount: 2, 
        pendingTodoCount: 1,
        handleNewTodo: jest.fn(), 
        handleDeleteTodo: jest.fn(), 
        handleToggleTodo: jest.fn(),
    });

    test('should show component', () => {

        render( <TodoApp/> );

        expect( screen.getByText('Do the bed') ).toBeTruthy();
        expect( screen.getByText('Write the letter') ).toBeTruthy();
        expect( screen.getByRole('textbox')).toBeTruthy();

        // screen.debug();
    })

})