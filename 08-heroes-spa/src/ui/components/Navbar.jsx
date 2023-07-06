import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context';


export const Navbar = () => {
    // Tarea: hacer que los links del Navbar al hacer click cambien el estado a active o lo elimine (conseguida) aunque he de decir que sabía medio como era, he tenido que buscar como era de verdad. me ha daltado poner como argumento el isActive, creía que era una propiedad del propio componente
    
    // Tarea: hacer que el nombre del usuario aparezca al hacer login en el navbar ( no conseguida )
    const { user } = useContext( AuthContext ) // no conseguido porque yo estaba desestructurando el login y era el user
    

    // este useNavegate es un hook que han personalizado los desarrolladores de react-router para hacer la navegación más sencilla. Es un custom hook porque no es 'oficial' pero es de la pag oficial de react-router
    const navigate = useNavigate(); 

    const onLogout = () => { // para añadir la funcionalidad al btn de logout y es aquí arriba porque los componentes deben ser lo más sencillos posibles
        navigate('/login', {
            replace: true
        });
    };

    return (

        <nav className="navbar navbar-expand-sm navbar-dark navbar-bg-modified p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        
                        to="/marvel"
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }`}
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        // className="nav-item nav-link" 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }`}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    
                    <NavLink 
                        // className="nav-item nav-link" 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }`}
                        to="/search"
                    >
                        Seach
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link navbar-span'>
                        {user?.name} {/* debe tener el ? porque sino da error ya que sino no estaría loggeado */}
                    </span>
                    <button
                        className='nav-item btn btn-secondary'
                        onClick={onLogout}
                    >
                    Logout</button>
                </ul>
            </div>
        </nav>
    )
}