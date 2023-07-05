import { Navigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';


export const Hero = () => {

    // const params = useParams(); // hook creado por react-router que sirve para obtener los parámetros
    // console.log(params);
    const { id } = useParams(); // hook creado por react-router que sirve para obtener los parámetros
    // console.log(id);
    

    const hero = getHeroById(id);

    if( !hero ) {
        return <Navigate to="/marvel"/>
    }

    return (
        <>
            <h1>{hero.superhero}</h1>
        
        </>
    )
}
