import React, { useContext } from "react";
import { CarritoContext } from "../../../../App";

const CarritoItem = ({ product }) => {
  //Context->carrito
  const { removeFromCarrito, updateQuantity } = useContext(CarritoContext);

  const handleIncrement = () => {
    updateQuantity(product.id, product.size, product.quantity + 1);
  };

  const handleDecrement = () => {
    if (product.quantity > 1) {
      updateQuantity(product.id, product.size, product.quantity - 1);
      }
    };

  return (
    <article>

      <h3>{product.name}</h3>
      <img  src={product.image} alt={product.name} style={{ width: "200px", height: "auto" }}/>
      <p>{product.description}</p>
      <p>Talla: {product.size}</p>
      <p>Precio: {product.price}€</p>

      <div>
        <button onClick={handleDecrement}>-</button>
        <span> {product.quantity} </span>
        <button onClick={handleIncrement}>+</button>
      </div>

      <button onClick={() => removeFromCarrito(product.id, product.size)}>Eliminar</button>
      
    </article>
  );
};

export default CarritoItem;

