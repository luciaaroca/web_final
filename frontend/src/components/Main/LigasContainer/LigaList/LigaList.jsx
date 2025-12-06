import React from "react";
import LigaItem from "./LigaItem/LigaItem";

const LigaList = ({ligas}) => {
   if (ligas.length === 0) {
    return <p>No se encuentran coincidencias</p>;
  }
  
  const renderCard = () => ligas.map(liga => <LigaItem key={liga.tshirt_id} liga={liga}/>)
  return <div className="tshirtList">
    <section className="list">
    {renderCard()}
    </section>
    </div>;
};

export default LigaList;
