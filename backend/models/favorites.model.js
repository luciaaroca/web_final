import queries from '../queries/favorites.queries.js';
import pool from '../config/db_pgsql.js';

//GET -> ALL/user 
const getAllFavoritesByUser = async (user_id) => {
    let client, result; 
    try {
        client = await pool.connect(); 
        const data = await client.query(queries.getAllFavoritesByUser, [user_id]) 
        result = data.rows; 
    } catch (err) {
        console.error('Error get-favorites:', err);
        throw err;}
        finally {
        client.release();
    }
    return result
}

//POST 
const postFavorites = async (user_id, tshirt_id) => {
    let client,result;
    try{
      client = await pool.connect();
      const data = await client.query(queries.postFavorites,[user_id, tshirt_id])
      result = data.rows[0];
    }catch (err){
      console.error('Error creando favorite:', err);
      throw err;   
    }finally{
      client.release();
    }
    return result
}

//DELETE

const deleteFavorite = async (user_id, tshirt_id) =>{
    let client,result;
    try{
       client = await pool.connect(); 
       const data = await client.query(queries.deleteFavorite,[user_id, tshirt_id]); // Lanza la query DELETE
       
       if (data.rows.length === 0) {
       throw new Error("Esta camiseta no está en tus favoritos");
       }

       result = data.rows[0]; 
    }catch(err){
       console.error('Error al borrar favorite:', err);
      throw err;  
    }finally{
      client.release();
    }
    return result

}

const favorites = {
   getAllFavoritesByUser,
   postFavorites,
   deleteFavorite
}


export default favorites;