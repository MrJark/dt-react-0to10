import heroes, { owners } from './data/heroes'; // esta es la manera de exportar algo en concreto, no es por defecto

// si un archivo es por default, la manera correcta, si fuera del estilo de heroes.js, sería sin las llaves:
// import heroes from './data/heroes'; 



const getHeroById = (id) => heroes.find( (hero) => hero.id === id);
// console.log(getHeroById(2));

const getHeroByFilter = ( owner ) => heroes.filter( ( hero ) => hero.owner === owner );
// console.log(getHeroByFilter("Marvel"));

// console.log(owners);
export {
    getHeroByFilter,
    getHeroById,
}