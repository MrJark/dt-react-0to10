const express = require('express'); // muy parecido al import ...
require('dotenv').config();


// Creación del servidor de express
const app = express();


// Directorio Público
// el .use es solo una función que se ejecuta siempre cada vez que se pasa por una ruta ( es un middelware )
app.use(express.static('public')); // este es la forma de decirle que habrá la carpeta public cunado quieras ver algo

// Rutas
// ruta de auth: crear, login, renew
app.use('/api/auth', require('./routes/auth')); // esto dice: los archivos que vengan del require, van a ser mandado o habilitar al '/api/auth
// ruta crud: Eventos



// Para escuchar las peticiones
app.listen(process.env.PORT, () => { // el núme del puerto en el que quieres que corra (ojo que no coincida con el del dev) y el segundo arg es un callback
    console.log(`Server running in port ${process.env.PORT}`); // El .PORT par atener la variable de entorno privada
}); 