import React, { useContext } from "react";
import { CarritoContext } from "../../../App";
import CarritoItem from "./CarritoItem/CarritoItem";

const CarritoList = () => {
  const { carrito } = useContext(CarritoContext);//estado actual del carrito (Context en app.js)

  if (carrito.length === 0) {
    return <h2>🛒 El carrito está vacío</h2>;
  }

  // Calcular el total del carrito
  const total = carrito.reduce((acc, item) => acc + item.price * item.quantity, 0);

  //Pasar item (camiseta)-> CarritoItem
  return (
    <section>
      <h1>Tu carrito de la compra</h1>
      <section>
        {carrito.map((item) => ( <CarritoItem key={item.id + item.size} product={item} />))}
      </section>
      <h2>Total: {total.toFixed(2)}€</h2>
      <button>Comprar</button>
    </section>
  );
};

export default CarritoList;

