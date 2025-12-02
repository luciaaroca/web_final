import React, {useEffect, useState} from "react";

import LigaList from './LigaList/LigaList'
import Select from './Select/Select'

import { getAllLigaTshirts,getAllLigaTshirtsByName } from "../../../services/tshirtsServices";

const LigasContainer = () => {
  //ESTADOS
  const [ligas, setLigas] = useState([]); // camisetas a mostrar LIGA LIST
  const [selectedLeague, setSelectedLeague] = useState(""); // liga seleccionada SELECT
  
  //LLAMAMOS API
  useEffect(()=>{
      const fetchLigaTshirts = async () => {
        try{
          const data = await getAllLigaTshirts ();
          setLigas(data);
        }catch(error){
          console.error("Error fetching product data:", error);
        }
      };
      fetchLigaTshirts();
  }, []);

  //MANEJAR CAMBIO EN EL SELECT

  const handleSelectChange = async (league_name) => {
    setSelectedLeague(league_name);
    if (!league_name) {
      const allData = await getAllLigaTshirts();
      setLigas(allData);
    } else {
      const filtered = await getAllLigaTshirtsByName(league_name);
      setLigas(filtered);
    }
  };
  
  return <section>
      <Select onChange={handleSelectChange} selected={selectedLeague} />
      <LigaList ligas={ligas} />
    </section>;;
};

export default LigasContainer;
