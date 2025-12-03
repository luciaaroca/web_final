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

  return <section>
      <div className="users_botons">
        <button> <Link to={`/login`}>Log In </Link></button>
        <button> <Link to={`/signup`}>Signu Up </Link></button>
      </div>
      <Search setTshirts={setTshirts}/> 
      <TshirtList  tshirts={tshirts} />
    </section>;
};

export default Home;
