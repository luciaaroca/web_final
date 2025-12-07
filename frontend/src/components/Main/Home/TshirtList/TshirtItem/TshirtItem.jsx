import React from "react";
import { Link } from "react-router-dom";

const TshirtItem = ({tshirt}) => {
  
  const name = tshirt.name;
  const image= tshirt.image;

  return <article className="tshirtItem">
    <h3>{name}</h3>
       <img
        src={encodeURI(image)}
        alt={tshirt.name}
        
      />
      <Link to={`/detail/${tshirt.tshirt_id}`} className="detailButton">Ver detalle</Link>
    </article>;
};

export default TshirtItem;
