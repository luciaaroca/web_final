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
    <article className="tshirtItem  carritoItem">

      <h3>{product.name}</h3>
      <img  src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p><b>Talla:</b> {product.size}</p>
      <p><b>Precio:</b> {product.price}€</p>
      <div>
        <button onClick={handleDecrement} className="carritoButtons">-</button>
        <span  style={{ fontWeight: 'bold' }}> {product.quantity} </span>
        <button onClick={handleIncrement} className="carritoButtons">+</button>
      </div>

      <button onClick={() => removeFromCarrito(product.id, product.size)} className="deleteButton">Eliminar</button>
      
    </article>
  );
};

export default CarritoItem;

