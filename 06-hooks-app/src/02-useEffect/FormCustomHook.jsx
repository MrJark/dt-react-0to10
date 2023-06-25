import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';



export const FormCustumHook = () => {

    // código más simple y limpio y solo traes aquellos elementos que te hagan fata porque no todos los formularios tendrán los mismos y así tienes un useForm grande, con todos los elementos necesarios pero solo traes a cada componente aquellos fragmentos que te hagan falta
    const { formState, onInputChange, username, email, password, onResetForm } = useForm({
        username: '',
        email: '',
        password: '',
    });

    // La linea siguiente te la puedes evitar si muestras en el return las variables que queires, username, email, password y paar ello puedes poner en el return del useForm el spread del formState ( ...formState) esto hará que se desestrusture el formState y muestre las variables que tiene y podrás eliminar la línea siguiente y simplemente llamarlas desde el useForm como las demás
    // const { username, email, password } = formState;

     /**
      * TODO: Hacer un btn que resete el form (conseguida)
      * He creado una const en el useForm donde hago el reset del form llamando a la función initialValue.
      * La he puesto en el return para poder llamarla
      * La he llamado en el evento de onClick del btn Reset
      */ 
    

  return (
    <>
        <h1>Simple Form with Custom Hook</h1>
        <hr />
        <input 
            type="text"
            className="form-control"
            placeholder="User Name"
            name="username"
            value={username}
            onChange={onInputChange}
        />
        <input 
            type="email"
            className="form-control mt-2"
            placeholder="ejemplo@ejemplo.com"
            name="email"
            value={email}
            onChange={onInputChange}
        />
        <input 
            type="password"
            className="form-control mt-2"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onInputChange}
        />

        <button className='btn btn-primary mt-4' onClick={ onResetForm }>Reset</button>
    </>
  )
}
