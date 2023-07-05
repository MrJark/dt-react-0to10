import { heroes } from '../data';


// función que filtra a través de los publishers 
export const getHeroByPublisher = ( publisher ) => {

    const validation = ['DC Comics', 'Marvel Comics'];

    if( !validation.includes( publisher ) ) {
        throw new Error(`${publisher} is not valid publisher`);
    };

    return heroes.filter( hero => hero.publisher === publisher )
}