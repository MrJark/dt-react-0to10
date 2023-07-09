import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'; // tienes que desactivarlo porque no te deja pasar las pruebas pero si no estás prubando descomenta

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
   
    // 3ª forma de mostrar el condicional. A través de una constante
    const showSearch = ( q.length === 0 ); // esta función regresa un valor booleano. Si se cumple, true, sino false
    const showError = ( q.length > 0) && heroes.length === 0;

    const { searchText, onInputChange } = useForm({ // hook creado anteriormente y que se puede utilizar para controlar el formulario
        searchText: q,
    });

    const onSearchSub = ( e ) => { // la e es el evento
        e.preventDefault();
        // if( searchText.trim().length <= 1) return; // comentado porque cuando borras lo que has puesto en el input, no se cambia el mensaje del query en el div de alert

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
                    {/* <h4>Results</h4>
                    <hr /> */}

                    {/* {
                        // Forma 1 de mostrar un condicional en un functional component. Se ve un poco complejo
                        ( q==='')
                            ? <div className="alert alert-secondary">Search a hero</div>
                            : ( heroes .length === 0 ) && <div className="alert alert-danger"> There's not a hero with <b>{ q }</b></div>
                    } */}

                    {/* Forma 2 de mostrar los elementos más simple y sencilla  dependiendo de si están o no activos ⬇️ */}
                    {/* <div className="alert alert-secondary" style={ { display: q !== '' ? 'none' : '' } }>
                    Search a hero</div>
                    <div className="alert alert-danger" style={ { display: 'none' } } >
                    There's not a hero with <b>{ q }</b></div> */}

                    {/* 3ª forma, a través de const, showSearch y showError. Distintas lógicas, mismo resultado */}
                    <div 
                        className="alert alert-secondary animate__animated animate__fadeIn" 
                        style={ { display: showSearch ? '' : 'none' } }
                    >
                    Search a hero</div>
                    <div 
                        className="alert alert-danger animate__animated animate__fadeIn" 
                        style={ { display: showError ? '' : 'none' } } 
                    >
                    There's not a hero with <b>{ q }</b></div>

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
