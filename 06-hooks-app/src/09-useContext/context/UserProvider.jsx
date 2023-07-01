import { UserContext } from "./UserContext"


// Sintaxis de un provider
export const UserProvider = ( { children } ) => {
    // los childrens que recibe son todos aquellos componentes hijos que tenga por debajo de él por tanto deberá ser llamado en el file que más arriba se encuentre, en este caso es el MainApp.jsx y por tanto, en evz del fragmento, debes poner este UserProvider
    // El user provider tiene que tener un value obligado


    return (
    <UserContext.Provider value={ { hola: 'hola' } }>
            { children }
    </UserContext.Provider>
    )
}
