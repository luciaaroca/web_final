import React from "react";

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
    </article>;
};

export default TshirtItem;
