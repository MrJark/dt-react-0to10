console.log('i');

const activo = false;
const activo1 = false;
let mensaje = '';
let mensaje1 = '';

// Forma larga y 'antigua' de validar
if (activo) {
    mensaje = 'Activo';
} else {
    mensaje = 'No activo';
};

console.log(mensaje);

// Forma corta y nueva
activo1 ? mensaje1 = 'Activo' : mensaje1 = 'No activo';
// tb se puede (forma más "segura")
const mensaje2 = (activo) ? 'Activo' : 'Inactivo';

console.log(mensaje1);
console.log(mensaje2);