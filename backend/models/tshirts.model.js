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

const getTshirtsByType = async (type) => {
    let client, result; 
    try {
        client = await pool.connect(); // Esperar conexión de base de datos (client)
        const data = await client.query(queries.getTshirtsByType, [type]) //esto lanza la querie sql (la tenemos en quieries)
        result = data.rows //resultado limpio
        
    } catch (err) {
        console.log(err);
        throw err;
    } finally { //cerramos la conexión -> es muy util en bases de datos
        client.release();
    }
    return result
}

//GET -> NAME

const getTshirtsByName = async (name) => {
    let client, result; 
    try {
        client = await pool.connect(); // Esperar conexión de base de datos (client)
        const data = await client.query(queries.getTshirtsByName, [name]) //esto lanza la querie sql (la tenemos en quieries)
        result = data.rows //resultado limpio
        
    } catch (err) {
        console.log(err);
        throw err;
    } finally { //cerramos la conexión -> es muy util en bases de datos
        client.release();
    }
    return result
}
//GET-> ID

const getTshirtsById = async (tshirt_id) => {
      let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getTshirtsById,[tshirt_id]);
        result = data.rows; // aquí están todas las camisetas de esa liga
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;

}





//GET -> LEAGUE NAME

const getTshirtsByLeagueName  = async (league_name) => {
      let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getTshirtsByLeagueName,[league_name]);
        result = data.rows; // aquí están todas las camisetas de esa liga
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;

}





const tshirts = {
   getAllTshirts,
   getTshirtsByType,
  getTshirtsByName,
  getTshirtsById,
  getTshirtsByLeagueName
}


export default tshirts;
