import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks';

import { HeroCard } from '../components';
import { getHeroByName } from '../helpers';


export const Search = () => {

    // hooks personalizados de react router dom
    const navigate = useNavigate();
    const location = useLocation(); 

    // const query = queryString.parse( location.search ); 
    const { q = '' } = queryString.parse( location.search ); // para parsear se una manera mas sencilla
    
    const heroes = getHeroByName(q); // para coger el hero con el query que puso el usuario
   
    
    const { searchText, onInputChange } = useForm({ // hook creado anteriormente y que se puede utilizar para controlar el formulario
        searchText: q,
    });

    const onSearchSub = ( e ) => { // la e es el evento
        e.preventDefault();
        if( searchText.trim().length <= 1) return;

        // console.log({searchText});
        navigate(`?q=${ searchText }`);
    }

    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className="row animate__animated animate__fadeIn">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />

                    <form onSubmit={ onSearchSub }>
                        <input 
                            type="text" 
                            placeholder="Search a hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ onInputChange }
                        />

                        <button 
                            className="btn btn-outline-secondary mt-2"
                        >
                        Search</button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    <div className="alert alert-secondary">
                        Search a hero
                    </div>
                    <div className="alert alert-danger">
                        There's not a hero with <b>{ q }</b>
                    </div>
                    {
                        heroes.map( hero => (
                            <HeroCard key={ hero.id } { ...hero }/>
                        ))
                    }
                </div>    
            </div> 
            
        </>
    )
}
