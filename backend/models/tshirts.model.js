import queries from '../queries/tshirts.queries.js';
import pool from '../config/db_pgsql.js';

//GET -> ALL 

const getAllTshirts = async () => {
    let client, result; //declarar variables (client= conexión a la base de datos./ result =guardará el resultado final)
    try {
        //client: objeto que permite ejecutar las query 
        client = await pool.connect(); // pool(pool de conexiones de PostgreSQL) /connect()Espera a abrir conexion
        const data = await client.query(queries.getAllTshirts) //ejecuta la QUERY (definid en quieries.js)
        result = data.rows //array de objetos con filas de la tabla (datos limpios - "SELECT"-> guardado en result
    } catch (err) {
        console.log(err);
        throw err;
    } finally {//cerramos la conexión 
        client.release();
    }
    return result
}

//GET -> TYPE

const getTshirtsByType = async () => {}

//GET -> NAME

const getTshirtsByName = async () => {}

//GET -> LEAGUE

const getTshirtsByLeagueName = async () => {}






const tshirts = {
   getAllTshirts,
//    getAllAuthors,
//    editAuthor,
//    deleteAuthor,
//    createAuthor
}


export default tshirts;
