
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

console.log(saludar2('Vegeta'));