import pkg from 'pg';  // import completo
const { Pool } = pkg;  // extraemos Pool

import dotenv from 'dotenv';
dotenv.config();
//require('dotenv').config()
// console.log(process.env);
const isProduction = process.env.NODE_ENV === 'production';
// Datos de conexión
const pool = new Pool({ 
    host: process.env.DB_HOST, 
    user: process.env.DB_USER, 
    database: process.env.DB_DATABASE, 
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    ssl: isProduction ? true : false // BBDD local (false) o remota (true)
     //ssl: process.env.DB_SSL === 'true' // BBDD local (false) o remota (true)
})


//module.exports = pool; //exportando
export default pool;