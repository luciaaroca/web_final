import React, { useContext } from "react";
import { CarritoContext } from "../../../App";
import CarritoItem from "./CarritoItem/CarritoItem";
import { postOrder } from "../../../services/ordersServices";

const CarritoList = () => {
  const {  carrito, clearCarrito, currentUser} = useContext(CarritoContext);//estado actual del carrito (Context en app.js)

  if (carrito.length === 0) {
    return <h2>🛒 El carrito está vacío</h2>;
  }

  // Calcular el total del carrito
  const total = carrito.reduce((acc, item) => acc + item.price * item.quantity, 0);

  //Botón de comprar
  const handleComprar = async () => {
  if (!currentUser) {
    alert("Debes iniciar sesión para realizar la compra");
    return;
  }
    const carritoBackend = carrito.map(item => ({
    tshirt_id: item.id,   // <-- tu id interno de la camiseta
    quantity: item.quantity || 1
  }));

   try {
    await postOrder(currentUser.id, carritoBackend);
    clearCarrito();
    alert("Compra realizada con éxito!");
  } catch (error) {
    console.error("Error al crear la orden:", error);
    alert("Hubo un error al procesar la compra.");
  }
  console.log("user_id:", currentUser?.id);
console.log("carrito:", carrito);
};

  //Pasar item (camiseta)-> CarritoItem
  return (
    <section>
      <h1>Tu carrito de la compra</h1>
      <section>
        {carrito.map((item) => ( <CarritoItem key={item.id + item.size} product={item} />))}
      </section>
      <h2>Total: {total.toFixed(2)}€</h2>
      <button onClick={handleComprar}>Comprar</button>
    </section>
  );
};

export default CarritoList;

