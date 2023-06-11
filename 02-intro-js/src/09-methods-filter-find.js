import { heroes } from './data/heroes';
//Imports

// Forma compleja de obtener el heroe a través de .find()
// const getHeroById = (id) => {
//     return heroes.find((hero) => {
//         if (hero.id === id){
//             return true;
//         } else {
//             return false;
//         }
//     });
// };

// Forma simple de obtenerlo con .find()
const getHeroById = (id) => heroes.find( (hero) => hero.id === id);
console.log(getHeroById(2));

const getHeroByFilter = ( owner ) => heroes.filter( ( hero ) => hero.owner === owner );
console.log(getHeroByFilter("Marvel"));