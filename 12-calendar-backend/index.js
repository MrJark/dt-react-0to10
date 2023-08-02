const express = require('express'); // muy parecido al import ...

// Creación del servidor de express
const app = express();

// Rutas
app.get('/', (req, res) => {
    // console.log('se requiere el /');
    res.json({
        ok: true
    })
});


// Para escuchar las peticiones
app.listen(4000, () => { // el núme del puerto en el que quieres que corra (ojo que no coincida con el del dev) y el segundo arg es un callback
    console.log(`Server running in port ${4000}`);
}); 