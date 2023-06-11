import { getHeroByFilter, getHeroById } from "./10-imports";

console.log('i');

/**
 * Promesas
 */

// por default son asincronas
// const promesa = new Promise( (resolve, reject ) => {

//     setTimeout( () => {
//         // console.log('hola');
//         // resolve();

//         const p1 = getHeroById(1);
//         resolve(p1); // lo que pongas en el parén. del resolve, se envia al .then
//     }, 3000)

// }); 

// promesa
//     .then( (hero) => { console.log(hero) } )
//     .catch( err => console.log(err));

const getheroByIdAsync = (id) => {
    return new Promise( (resolve, reject ) => {

        setTimeout( () => {
            // console.log('hola');
            // resolve();
            const p1 = getHeroById(id);
            if ( p1 ) { // es necesario esta condición si quieres que en el .then y .catch te salga la solución o el error
                resolve(p1); // lo que pongas en el parén. del resolve, se envia al .then
                
            } else {
                reject('El heroe no existe');
            }
        }, 2000)
    
    });
    
};
getheroByIdAsync(1)
    // .then( hero => console.log(hero) )
    .then( console.log ) // igual que el catch
    // .catch( err => console.log(err) )
    .catch( console.log ) // se puede poner así tb porque al no recibir nada, lo primero que pone es el primer alemento que encuentre, en este caso el reject