
console.log('Hola bb');

/**
 * Creación de objetos literales (tb conocidos diccionarios)
 */

const persona = {
    name: 'Tony',
    subname: 'Stark',
    age: 45,
    direction: {
        city: 'New York',
        zip: 3968,
    },
};

// console.table(persona);

/**
 * Copias y duplicados de objetos literales
 */

// const persona2 = persona; // si haces esto, lo que haces es hacer una copia de la REFERENCIA y no del objeto, es decir, si modificas uno de ellos, se verá modificada la copia o el original también por tanto, esta no es la manera de copiar objetos.

//Forma correcta de hacer copias ( debes usar el spread (...) )

const persona2 = {...persona}
persona2.name = 'Peter';
persona2.subname = 'Parker';
persona2.age = 19;
// console.table(persona);
// console.table(persona2);

