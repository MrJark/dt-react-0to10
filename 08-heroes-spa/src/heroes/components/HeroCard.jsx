import { Link } from 'react-router-dom';

const CharactersByHero = ( { alter_ego, characters } ) => { 
    
    // if (alter_ego === characters) return (<></>); // 3ª forma de crear el mismo componente para no repetir los nombres y aquí, solo lo estamos creando en este archivo por tanto, no lo vas a exportar a otos elementos
    // return <p> { characters } </p>;

    return (alter_ego === characters) // 4ª forma de hacer que no se repitan los componentes
        ? <></>
        : <p> { characters } </p>;
}


// las props que necesita la carta son los elementos que las identifican
export const HeroCard = ( { 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
    }) => {

        const heroImg = `/assets/heroes/${id}.jpg`;

        // const charactersByHero = (<p> { characters } </p>); // 2º forma de crear el componente para que no se repitan los nombres

    return (
        <>
            <div className="col">
                <div className="card">

                    <div className="row no-gutters">

                        <div className="col-4">
                            <img src={heroImg} className="card-img" alt={superhero} />
                        </div>

                        <div className="col-8">
                            <div className="card-body">

                                <h5 className="card-title"> { superhero } </h5>

                                <p className="card-text"> { alter_ego } </p>

                                {/* {
                                    (alter_ego !== characters ) &&  <p> { characters } </p> // 1ª forma para que no se repitan los nombres de los personajes si han sido los mismos
                                } */}

                                <CharactersByHero characters={characters} alter_ego={alter_ego}/>

                                <p className="card-text">
                                    <small className="text-muted">{ first_appearance }</small>
                                </p>

                                <Link to={`/hero/${ id }`}>
                                    More info...
                                </Link>
                                
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
