

const arreglo = [1, 2, 3, 4];
const arreglo2 = [0, ...arreglo, 5, 6]; // Forma correcta de copiar y añadir elementos a los arreglos

const arreglo3 = arreglo2.map( (x) => {
    return x * 2;
});
// Igual forma pero simplificada
const arreglo4 = arreglo2.map( n => n *2);

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
console.log(arreglo4);

