import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config({path: '.env'});

//Crea una nueva instancia
const db = new Sequelize(process.env.BD_NAME, process.env.BD_USER, process.env.BD_PASSWORD,{
    host: process.env.BD_HOST,
    port: process.env.BD_PORT,
    dialect: 'mysql',
    define: {
        //dos columnas que muestran cuando se creo y cuando se actualizó
        timestamps: true
    },
    //configura cómo va a ser el comportamiento para conexiones nuevas o antiguas
    pool: {
        //máximo de conexiones a mantener
        max: 5,
        //desconecta todo cuando no se está usando para evitar consumir recursos
        min: 0,
        //30 segundos que pasa tratando de hacer una conexión antes de que marque error 
        acquire: 30000,
        //10 segundos para finalizar una conexión (cuando no se está usando)
        idle: 10000,
    },
});

export default db 