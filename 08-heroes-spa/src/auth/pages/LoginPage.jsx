import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';


export const LoginPage = () => {

  const { login } = useContext( AuthContext )
  const navigate = useNavigate(); // para poder navegar entre rutas más fácil sin tener que crearte tu custom hook

  const onLogin = () => {

    login('Chema Ferrández');

    navigate('/', {
      replace: true, // esto es para remplazar el historial. Para que no pueda regresar a la ruta anterior
      
    });

  };

  return (
    <>
      <div className="container mt-5">
        <h1>Login</h1>
        <hr />
        <button 
          className="btn btn-secondary"
          onClick={ onLogin }
        >
        Login</button>
      </div>
    </>
  )
}
