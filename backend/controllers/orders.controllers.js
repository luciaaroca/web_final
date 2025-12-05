import ordersModel from '../models/orders.model.js'

//POST
const postOrder = async (req,res) =>{
  try{
    //metemos por el body: user id y nuestro array de objetos-> carrito
    const { user_id, carrito } = req.body;

    if (!user_id || !carrito || carrito.length === 0) {
      return res.status(400).json({ message: "Carrito vacío o falta user_id" });
    }
    //Añadir a la tabla orders
    const newOrder = await ordersModel.createOrder(user_id);

    //Bucle para cada pedido se rellene una fila de orders-tshirts
    for (const item of carrito) {
        await ordersModel.createOrderTshirt(
            newOrder.order_id,
            item.tshirt_id,
            item.quantity || 1
        );
    }
    res.status(201).json({
      message: "Orden creada correctamente",
      order: newOrder,
    });
  
  }catch(error){
    console.error(error);
    res.status(500).json({ message: "Error al crear la orden"  }); 
  }
}



export default {
postOrder
};