const mysql = require('mysql');
require('dotenv').config();

const BD_NAME = process.env.DB_NAME;
const BD_HOST = process.env.DB_HOST;
const BD_USER = process.env.DB_USER;
const BD_PASSWORD = process.env.DB_PASSWORD;
const BD_PORT = process.env.DB_PORT;

let connection =mysql.createConnection({
    host : BD_HOST,
    user : BD_USER,
    password: BD_PASSWORD,
    port : BD_PORT,
    database: BD_NAME
});

connection.connect((err => {
    if(err){
        console.log('Ocurrio un error conectando a base de datos: '+err);
    }else{
        console.log('Conexión a la bd establecida correctamente');
    }
}))

module.exports = connection;