/**
 * 
 * Funciones
 * 
 */
const name = 'Vegeta';

// No es recomendable crear funciones de esta manera ya que son muy "débiles"
// function saludar(name) {
//     return `Hola, ${name} `;
// };

// Forma correcta
const saludar = function (name) {
    return `Hola, ${name} `;
};


// Funciones de flecha
const saludar2 =(name) => {
    return `Hola, ${name}`;
};
//Forma simplificada de arrow function
const saludar3 = (name) => `Hola, soy ${name}`;

const getUser = () =>(
    {
        uuid: 'AKLDGA',
        username: 'Vegeta',
    }
)

console.log(saludar3('Vegeta'));
console.log(saludar2('Vegeta'));

function getUsuarioActivo ( name ) {
    return {
        uuid: 'aksdjgfla',
        usarname: name,
    }
};
const usuarioActivo = getUsuarioActivo('Chema');
console.log(usuarioActivo);
// Tarea: 
// 1. Transformar getUsuarioActivo a arrow function: Conseguido
// 2. Tiene que dar un objeto: No conseguido. No sabía que quería decir pero tenia que quitar el return y poner los paréntesis

const getUsuarioActivo1 = ( name ) => ({
    uuid: 'aksdjgfla',
    usarname: name,
});
const usuarioActivo2 = getUsuarioActivo1('Chema');
console.log(usuarioActivo2);