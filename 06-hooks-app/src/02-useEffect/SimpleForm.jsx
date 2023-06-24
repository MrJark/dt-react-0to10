import { useEffect, useState } from 'react';


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'mrjark',
        email: 'mrjarj@mrjark.com',
    });

    // para colocar el userName y email, necesitas desestructurar el formState en sus componentes
    const { username, email } = formState;

    const onInputChange = ( { target } ) => { // del evento desestructuras y obtienes el target que es hacia donde apunta el evento
        const { name, value } = target; // de este target queires el valor y el nombre
        
        // para cambiar el state y como es un objeto, usuas el spread para mantener los valores originales y lo que quieres es que la propiedad name, tiene que ser entre brackets porque sino no funciona, cambie al valor, value, que le estás dando nuevo
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    // efects -> el useEffect es una función que tinee dentro un callback
    // no es recomendable tener un useEffect sin una dependencia, es decir, sin un segundo argumento. Si únicamente pones los brackets, [], le estás diciendo que solo quieres que se dispare al inicio y no más
    useEffect( () => {
        console.log('useEffect was call');
    }, []);
    // recomendación de React: en vez de hacer un useEffect enorme, es mejor hacer uno por cada elemento que quieras que haga
    useEffect( () => {
        console.log('formState changed');
    }, [formState]); // le dices que se dispare cada vez que pase algo en el formState
    useEffect( () => {
        console.log('email changed');
    }, [email]); // le dices que se dispare cada vez que pase algo en el email lo que hará que tb se dispare el useEffect del formState
    

  return (
    <>
        <h1>Simple Form</h1>
        <hr />
        <input 
            type="text"
            className="form-control"
            placeholder="User Name"
            name="username"
            // value={username}
            onChange={onInputChange}
        />
        <input 
            type="email"
            className="form-control mt-2"
            placeholder="User email"
            name="email"
            // value={email}
            onChange={onInputChange}
        />
    </>
  )
}
