import React from "react";
import RetroItem from "./RetroItem/RetroItem" 

const RetroList = ({ retro, isLoading }) => {
  if (isLoading) return <p>Cargando...</p>;

  if (retro.length === 0) {
    return <p>No se encuentran camisetas retro</p>;
  }
   const renderCard = () => retro.map(item => <RetroItem key={item.tshirt_id} item={item}/>)
  return <div className="tshirtList">
        <h1>CAMISETAS RETRO</h1>
        <section className="list">
            {renderCard()}
        </section>
    </div>;
};

export default RetroList;
