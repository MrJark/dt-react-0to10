
// exportación "normal"
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];
// exportación por defecto:
// no se pone el nombre de una constante ni la palabra reservada. A la hora de exportarlo, al archivo que lo vayamos a exportar es cuando le damos el nombre a este 
// import patatasConJamon from './....... '; entonces este archivo donde lo estoy llamando, tendría el nombre de patatasConJamon
// export default [
//     {
//         id: 1,
//         name: 'Batman',
//         owner: 'DC'
//     },
//     {
//         id: 2,
//         name: 'Spiderman',
//         owner: 'Marvel'
//     },
//     {
//         id: 3,
//         name: 'Superman',
//         owner: 'DC'
//     },
//     {
//         id: 4,
//         name: 'Flash',
//         owner: 'DC'
//     },
//     {
//         id: 5,
//         name: 'Wolverine',
//         owner: 'Marvel'
//     },
// ];

export const owners = ['DC', 'Marver',];
export default heroes;

// Tmabién se pueden hacer exportaciones en grupo
// export {
//     heroes as default, // si quieres exportar algo por defecto y que esté en el grupo, tienes que hacerlo de esta manera pero ten en cuneta que al importarlo, tendrá que ir sin {}
//     owners
// }