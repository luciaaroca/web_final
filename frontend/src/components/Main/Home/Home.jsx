import React, {useEffect, useState} from "react";


import TshirtList from "./TshirtList/TshirtList" //Importamos Componente: TshirtList (renderizado)
import Search from "./Search/Search" //Importamos Componente: Search: input + botón

import { getAllTshirts } from "../../../services/tshirtsServices";

const Home = () => {
  //ESTADOS
  
  const [tshirts, setTshirts] = useState([]); //TSHIRTS mostrados API
  
  //LLAMADA API
  
  useEffect(()=>{
    const fetchTshirts = async () => {
      try{
        const data = await getAllTshirts();
        setTshirts(data);
      }catch(error){
        console.error("Error fetching product data:", error);
      }
    };
    fetchTshirts();
}, []);

  return <section>
    <h1>Hola</h1>
      <Search setTshirts={setTshirts}/> 
      <TshirtList  tshirts={tshirts} />
    </section>;
};

export default Home;
