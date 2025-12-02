import React from "react";
import TshirtItem from "./TshirtItem/TshirtItem";

const TshirtList = ({tshirts}) => {
  const renderCard = () => tshirts.map(tshirt => <TshirtItem key={tshirt.tshirt_id} tshirt={tshirt}/>)

  return <div>
      <section>
      {renderCard()}
      </section>
    </div>;
};

export default TshirtList;
