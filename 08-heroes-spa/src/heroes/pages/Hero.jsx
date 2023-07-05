import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';
import { useMemo } from 'react';


export const Hero = () => {

    // const params = useParams(); // hook creado por react-router que sirve para obtener los parámetros
    // console.log(params);
    const { id } = useParams(); // hook creado por react-router que sirve para obtener los parámetros
    const navegate = useNavigate();

    // const hero = getHeroById(id); // no es eficiente
    const hero = useMemo( () => getHeroById(id), [id] ); // se usa el memo para que no se renderiza cada vez que un componente cambie. Solo cambiará cuando la dependencia, el id, cambie. Esto es mucho más eficiente

    // Tarea: hacer que el btn GoBack funcione ( no conseguida, no sabía que tenía que llamar al useNavegate)

    const onGoBack = () => {
        // return <Navigate to="/marvel"/> // como lo estaba haciendo
        navegate(-1); // esto lleva al usuario a la pag anterior, incluida sacarlo de la app
    };


    if( !hero ) { // si no exsite un hero se redirecciona
        return <Navigate to="/marvel"/>
    }

    return (
        <>
            <div className='row mt-5'>
                <div className="col-4">
                    <img 
                        src={`/assets/heroes/${id}.jpg`}
                        alt={ hero.superhero }
                        className='img-thumbnail'    
                    />
                </div>
                <div className="col-8">
                    <h3>{hero.superhero} </h3>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'><b>Alter ego:</b> { hero.alter_ego } </li>
                        <li className='list-group-item'><b>Publiser: </b> { hero.publisher } </li>
                        <li className='list-group-item'><b>First Apparence: </b> { hero.first_appearance } </li>
                        
                    </ul>
                    <h5 className='mt-3'>Characters </h5>
                    <p>{hero.characters}</p>
                    <hr />

                    <button 
                        className='btn btn-outline-secondary'
                        onClick={ onGoBack }
                    >
                    Go back</button>
                </div>
            </div>
        
        </>
    )
}
