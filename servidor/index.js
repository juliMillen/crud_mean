const express = require('express');

// crear el servidor
const app = express();


//definir ruta principal

app.get('/', (req,res) =>{
    res.send('Hola Mundo')
})

app.listen(4000, () => {
    console.log('El servidor esta corriendo correctamente');
})