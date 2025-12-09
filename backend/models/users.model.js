import bcrypt from 'bcryptjs';
import queries from '../queries/users.queries.js';
import pool from '../config/db_pgsql.js';


//LOG IN 
const login = async (email) => {
    let client, result;
    try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.getUserByEmail, [email]);
    result = data.rows[0];

    } catch (error) {
        console.log(error.message);
        throw error
    }finally {
        if (client) client.release(); // Liberar conexión siempre
    }return result;
};

//SIGN UP
const signup = async (username, email, password) => {
    console.log("****",username,email);
    const hashedPassword = await bcrypt.hash(password, 10); // <-- HASH
    let client, result;
     try {
        client = await pool.connect(); // Espera conexión con la base de datos
        const data = await client.query(queries.createUser, [username, email,hashedPassword]); // Lanza la query DELETE
        result = data.rows[0];
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }finally {
        client.release(); // Libera la conexión al pool
    }
    return result; // Devuelve 1 si se borró, 0 si no se encontró
};


const users = {
  login,
  signup
}


export default users;