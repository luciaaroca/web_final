import React from "react";
import { Link } from "react-router-dom";

const EspecialItem = ({tshirt}) => {
   const name = tshirt.name;
   const image= tshirt.image;
  return <setion className="tshirtItem">
        <h3>{name}</h3>
           <img
            src={encodeURI(image)}
            alt={tshirt.name}
            style={{ width: "200px", height: "auto" }}
          />
           <Link to={`/detail/${tshirt.tshirt_id}`}>Ver detalle</Link>
        </setion>;
};

export default EspecialItem;
