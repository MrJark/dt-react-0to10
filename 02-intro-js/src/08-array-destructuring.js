/**
 * Desestructuración de arreglos
 */

const personajes = [
    'goku',
    'vegeta',
    'piccolo',
];
// Para obtener a goku
const [p1] = personajes;
console.log(p1);

// para obtnener a vegeta, solo tengo que poner la coma antes
const [,p2] = personajes;
console.log(p2);

// para obtener a piccolo, tengo que poner 2 comas, para que ignore los dos primeros
const [,,p3] = personajes;
console.log(p3);

const retornaArreglo = () => ['ABC', 123];

const [,letras1] = retornaArreglo();
console.log(letras1); // 123 (POR LAS COMA)
const [letras0] = retornaArreglo();
console.log(letras0); // ABC

// Tarea: (no sabia que me pedía) -> solo era porner como "nombre" de la const la desestructuración y los nombre como quería que se llamaran
// 1. Imprimir el primer valor del arr que será "nombre"
// 2. El segundo valor de lal arr será "setNombre"
const useState = (value) => [ value, () => ( console.log( 'Hola Mundo' ) ) ];
const [nombre, setNombre] = useState('Kakaroto');

console.log(nombre);
setNombre();
