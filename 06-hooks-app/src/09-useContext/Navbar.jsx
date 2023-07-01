import {Link, NavLink } from 'react-router-dom';

 export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark d-felx rounded-3">

            <div className="container-fluid">
                <Link className="navbar-brand" to="/">useCase</Link>
            
                <div className="container-fluid" id="navbarNav">
                    <ul className="navbar-nav">

                        <NavLink 
                            to="/" 
                            className={ ({isActive}) =>  `nav-link ${ isActive ? 'active' : '' }` }
                        >
                        Home</NavLink>

                        <NavLink 
                            to="about" 
                            className={ ({isActive}) => `nav-link ${ isActive ? 'active' : '' }`}
                        >
                        About</NavLink>
                        <NavLink 
                            to="login" 
                            className={ ({isActive}) => `nav-link ${ isActive ? 'active' : '' }`}
                        >
                        Login</NavLink>
                    </ul>
                    
                </div>
            
            </div>

            
        </nav>
    )
 }
 