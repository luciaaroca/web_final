import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom'


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

  return <section className="home">
    <div className="banner">
    </div>
    <section className="homeContent">
    <Search setTshirts={setTshirts}/> 
      <div className="users_botons">
         <Link to={`/login`}>LOG IN </Link>
         <Link to={`/signup`}>SIGN UP </Link>
      </div>
    </section>
     
      <TshirtList  tshirts={tshirts} />
    </section>;
};

export default Home;
