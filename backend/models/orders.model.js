import queries from '../queries/orders.queries.js';
import pool from '../config/db_pgsql.js';

//POST ORDERS
const createOrder = async (user_id) => {
  let client,result;
  try{
     client = await pool.connect();
     const data = await client.query(queries.createOrder,[user_id])
     result = data.rows[0];
  }catch(err){
     console.error('Error creando order:', err);
     throw err; 
  }finally{
      client.release();
    }
    return result
};


//POST ORDERS-TSHIRTS
const createOrderTshirt = async (order_id,tshirt_id, quantity) =>{
  let client,result;
  try{
     client = await pool.connect();
     const data = await client.query(queries.createOrderTshirt,[order_id,tshirt_id, quantity])
     result = data.rows[0];
  }catch(err){
     console.error('Error creando order-tshirt:', err);
     throw err; 
  }finally{
      client.release();
    }
    return result
}

const orders = {
createOrder,
createOrderTshirt 
}


export default orders;