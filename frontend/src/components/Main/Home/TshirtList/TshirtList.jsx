import React from "react";
import TshirtItem from "./TshirtItem/TshirtItem";

const TshirtList = ({tshirts}) => {
  const renderCard = () => tshirts.map(tshirt => <TshirtItem key={tshirt.tshirt_id} tshirt={tshirt}/>)

  return <section>
      <div>
      {renderCard()}
      </div>
    </section>;
};

export default TshirtList;
