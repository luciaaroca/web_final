import React,{useEffect,useState} from "react";
import EspecialList from "./EspecialList/EspecialList"
import {  getEspecial } from "../../../services/tshirtsServices";

const EspecialContainer = () => {
  const [especialTshirts, setEspecialTshirts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchEspecial = async () => {
        try {
          const data = await getEspecial();
          setEspecialTshirts(data);
        } catch (error) {
          console.error("Error fetching retro tshirts:", error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchEspecial();
    }, []);
  return<section>
      <EspecialList especialTshirts={especialTshirts} isLoading={isLoading} />
    </section>;
};

export default EspecialContainer;
