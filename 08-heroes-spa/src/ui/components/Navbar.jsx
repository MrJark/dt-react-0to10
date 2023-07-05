import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    // Tarea: hacer que los links del Navbar al hacer click cambien el estado a active o lo elimine (achieved) aunque he de decir que sabía medio como era, he tenido que buscar como era de verdad. me ha daltado poner como argumento el isActive, creía que era una propiedad del propio componente
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
                        Chema
                    </span>
                    <button
                        className='nav-item btn btn-secondary'
                    >
                    Logout</button>
                </ul>
            </div>
        </nav>
    )
}