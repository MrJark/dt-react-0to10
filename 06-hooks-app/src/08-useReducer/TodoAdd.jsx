import { useForm } from '../hooks'


export const TodoAdd = ( { onNewTodo } ) => {

    // para manejar el form usa el custom hook que ya tenías
    const { description, onInputChange, onResetForm } = useForm({
        description: '',
    });

    const onFormSubmit = ( event ) => {
        event.preventDefault();
        if (description.length <= 1) return;

        const newTodo = {
           id: new Date().getTime(),
           achieved: false,
           task: description,
        }

        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <>

            <form onSubmit={ onFormSubmit } >
                <input 
                    type="text" 
                    placeholder="What's the task?" 
                    className="form-control" 
                    name='description'
                    value={description}
                    onChange={onInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-secondary mt-2"
                >Add TODO</button>
            </form>

        </>
    )
}
