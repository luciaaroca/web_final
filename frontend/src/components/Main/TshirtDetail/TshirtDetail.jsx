import React, { useEffect, useState }  from "react";
import { useParams } from "react-router-dom";

import {getTshirtsById} from "../../../services/tshirtsServices";

const TshirtDetail = () => {
 const { tshirt_id } = useParams(); // params
 //ESTADOS
 const [tshirtDetail, setTshirtDetail] = useState(null);

  useEffect(() => {
    const fetchTshirtbyId = async () => {
   
      try {
        const data = await getTshirtsById(tshirt_id);
        setTshirtDetail(data);
      
      } catch (error) {
       console.error("Error fetching product data:", error);
      }
    };

    fetchTshirtbyId();
  }, [tshirt_id]);


  //FUNCIÓN DE RENDERIZADO
  const renderOneTshirt = () => {
    if (!tshirtDetail) return "No se ha encontrado este pokemon";
    return (
      <div className="TshirtDetail">
        <h2 className="pokemonName"> {tshirtDetail.name}</h2>
      </div>
    )
  }
  return <div>
    {renderOneTshirt() }
    </div>;
};

export default TshirtDetail;
