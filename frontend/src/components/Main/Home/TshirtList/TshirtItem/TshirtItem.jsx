import React from "react";
import { Link } from "react-router-dom";

const TshirtItem = ({tshirt}) => {
  
  const name = tshirt.name;
  const image= tshirt.image;

  return <article>
    <h1>{name}</h1>
       <img
        src={encodeURI(image)}
        alt={tshirt.name}
        style={{ width: "200px", height: "auto" }}
      />
       <Link to={`/detail/${tshirt.tshirt_id}`}>Ver detalle</Link>
    </article>;
};

export default TshirtItem;
