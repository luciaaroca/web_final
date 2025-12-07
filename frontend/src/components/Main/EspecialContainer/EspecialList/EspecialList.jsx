import React from "react";
import EspecialItem from "./EspecialItem/EspecialItem"

const EspecialList = ({ especialTshirts, isLoading }) => {

  if (isLoading) return <p>Cargando...</p>;

  if (especialTshirts.length === 0) {
    return <p>No se encuentran camisetas especiales</p>;
  }
  const renderCard = () => especialTshirts.map(tshirt => <EspecialItem key={tshirt.tshirt_id} tshirt={tshirt}/>)
  
  return<div className="tshirtList">
        <h1>CAMISETAS ESPECIALES</h1>
        <section className="list">
            {renderCard()}
        </section>
    </div>;
};

export default EspecialList;
