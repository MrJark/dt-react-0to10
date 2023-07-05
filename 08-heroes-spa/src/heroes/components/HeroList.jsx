// import { heroes } from "../data";
import { getHeroByPublisher } from "../helpers";
import { HeroCard } from "./";

/*
Tarea: a través de este HeroList tengo que llamar a los heroes y mostrar en las páginas respectivas de DC una lista con solo los de DC e igual en Marvel
No conseguida. Se lo que tengo que hacer, se la lógica que tengio que seguir. Generar el .map en este componente y hacer que se viera, dependiendo del publisher, los heroes en DCjsx y mARVEL.JSX. 
He intentado buscar en los otros archivos del curso pero no lo he conseguido después de 20' 😪
*/

export const HeroList = ( { publisher } ) => {

    const heroes = getHeroByPublisher( publisher );
    
    return (
        <>
            <div className="row rows-cols1 row-cols-md-3 g-3">
                {
                    heroes.map( hero => (
                        <HeroCard 
                            key={ hero.id }
                            {...hero} // desestructuro el hero porque hacen falta todas las props y es más rápido hacerlo así que de una en una
                        />
                    ))
                }
            </div>
        </>
    )
}
