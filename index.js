require('dotenv').config();
require('./config/mysql');
const router = require('./app/routes/flight.js');

const express = require('express');

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.set('port', PORT);

app.use(router);

app.listen(app.get('port'), (err) => {
    if(err){
        console.log('Error al iniciar servidor: '+error);
    }else{
        console.log('Servidor iniciado con exito en el puerto:  '+PORT);
    }
})