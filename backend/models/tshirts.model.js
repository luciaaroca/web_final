import queries from '../queries/tshirts.queries.js';
import pool from '../config/db_pgsql.js';

//GET -> ALL 

const getAllTshirts = async () => {
    let client, result; 
    try {
        
        client = await pool.connect(); 
        const data = await client.query(queries.getAllTshirts) 
        result = data.rows 
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

//GET -> TYPE

const getTshirtsByType = async (type) => {
    let client, result; 
    try {
        client = await pool.connect(); 
        const data = await client.query(queries.getTshirtsByType, [type]) 
        result = data.rows 
        
    } catch (err) {
        console.log(err);
        throw err;
    } finally { 
        client.release();
    }
    return result
}

//GET -> NAME

const getTshirtsByName = async (name) => {
    let client, result; 
    try {
        client = await pool.connect(); 
        const data = await client.query(queries.getTshirtsByName, [name]) 
        result = data.rows 
        
    } catch (err) {
        console.log(err);
        throw err;
    } finally { 
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
        result = data.rows; 
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
        result = data.rows; 
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
