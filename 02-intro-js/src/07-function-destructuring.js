/**
 * Desestructuración de objetos
 */

const persona = {
    name: 'Tony',
    subname: 'Stark',
    age: 49,
    super: 'Ironman',
};

console.log({...persona});
console.log(persona);

// Es muy tedioso si solo queremos que nos devuelca el nombre, apellido o edad tener que estar poniendo persona.(lo que queremos)

console.log(persona.name);
console.log(persona.subname);
console.log(persona.age);

// Para resolver esto, usa la DESESTRUCTURACIÓN de objetos. Donde dentro de los corchetes, pones lo que queremos extraer del objeto al cual igualas, en este caso, persona. Y para mostrarlo, solo tienes que llamar al elemento que has querido extraer

const {name} = persona;
console.log(name); 


// Uso 2
const returnPersona = (user) => {

    const {age, name, subname} = user;
    console.log(age, name, subname);

};
returnPersona(persona);
// para simplificar y desestruc, el uso 2
const returnPersona2 = ({name, age, range = 'Avenger'}) => { // tienes que poner en el argumento los {} con lo que quieres en su interior. Tb se puedes establecer o asignar valores por defecto dentro de la desestructura. como es en este caso el rango ya que en persona no aparece pero me lo imprime. Pero si sí existe, aparecerá el valor del objeto al que haces referencia y no el valor que le hayas asignado 
    console.log(name, age, range);
};
returnPersona2(persona);


