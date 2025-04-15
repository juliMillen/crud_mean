const express = require('express');
const conectarDB = require('./config/db');
// crear el servidor
const app = express();

//conectar a la BD
conectarDB();

app.use('/api/productos', require('./routes/producto'));


//definir ruta principal

app.get('/', (req,res) =>{
    res.send('Hola Mundo')
})

app.listen(4000, () => {
    console.log('El servidor esta corriendo correctamente');
})