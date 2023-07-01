import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const LoginPage = () => {

  const {user, setUser } = useContext( UserContext );
  console.log(user);
  // si quieres verlo recuerda estar en la pag login

  return (
    <>
      <h1>Login Page</h1>
      <hr />
      <h2>{ user?.name }</h2>
    
      <pre>
        {JSON.stringify(user)}
      </pre>

      <button 
        className='btn btn-secondary'
        onClick={ () => setUser( { id: 456, name: 'Antonio', email: 'c@chema.com' } )}
      >
        Set User
      </button>
    </>
    
  )
};