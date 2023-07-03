import { screen, render, fireEvent } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('test in TodoItem', () => {

    // como TodoItem recibe props y van a hacer falta, las colocas donde puedas cogerlas en todos los test
    const todo = {
        id: 1,
        description: 'Patatas con jamon',
        achieved: false
    };

    // tb te hacen falta las dos fonciones que recibe como props por tanto, l tienes que decir a jest que esas dos const son funciones
    // se les pone al final 'Mock' para saber lo que son
    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    // esto es para que desapués de cada prueba, jest limpie los mocks de las funciones
    beforeEach( () => jest.clearAllMocks() );

    test('should show pending TODO', () => {

        // tienes que poner los proptypes en el TodoItem.jsx porque son elementos obligatorios
        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between mt-2'); // clases que debe tener el elmento li
        
        const spanElement = screen.getByLabelText('span');
        // expect(spanElement.className).toBe('align-self-center'); // da error porque al final como encadenas código con las backticks y no es estético dejarlo junto, el toBe es estricto pero puedes usar el .toContain para decirle si eso está, haya espacios o no o puedes agregarle el espacio al final cosa que... meh
        expect(spanElement.className).toContain('align-self-center'); 
        expect(spanElement.className).not.toContain('text-decoration-line-through'); 
        // console.log(spanElement.className);

        // screen.debug()
    });
    
    test('should show achieved TODO with true', () => {

        todo.achieved = true;

        // tienes que poner los proptypes en el TodoItem.jsx porque son elementos obligatorios
        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between mt-2'); // clases que debe tener el elmento li
        
        const spanElement = screen.getByLabelText('span');
        // expect(spanElement.className).toBe('align-self-center'); // da error porque al final como encadenas código con las backticks y no es estético dejarlo junto, el toBe es estricto pero puedes usar el .toContain para decirle si eso está, haya espacios o no o puedes agregarle el espacio al final cosa que... meh
        // expect(spanElement.className).not.toContain('align-self-center'); 
        expect(spanElement.className).toContain('text-decoration-line-through'); 
        // console.log(spanElement.className);

        // screen.debug()
    });

    test('should call toggle when clicked', () => {
        // SOLO se necesita probar aquí que se llama al onToggleTodo

        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        const toggleBtn = screen.getByLabelText('toTestedToggle'); // en tengo un btn específico para los toggle
        fireEvent.click(toggleBtn); // función para simular que está siendo clicked el toggleBtn

        expect( onToggleTodoMock ).toHaveBeenCalledWith(todo.id);
    });
    
    test('Task: should call deleteBtn when clicked (achieved)', () => {
        // SOLO se necesita probar aquí que se llama al onToggleTodo
        // era igual que el anterior pero como yo tenia un btn que en el curso no se hizo, he tenido que crearlo 
        
        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        const deleteBtn = screen.getByLabelText('toTestedDelete'); 
        fireEvent.click(deleteBtn); // función para simular que está siendo clicked el deleteBtn

        expect( onDeleteTodoMock ).toHaveBeenCalledWith(todo.id);
    });

});