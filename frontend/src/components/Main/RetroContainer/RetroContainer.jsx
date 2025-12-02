import React,{useState, useEffect} from "react";
import RetroList from "./RetroList/RetroList";
import { getRetro } from "../../../services/tshirtsServices";

const RetroContainer = () => {
  const [retroTshirts, setRetroTshirts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRetro = async () => {
      try {
        const data = await getRetro();
        setRetroTshirts(data);
      } catch (error) {
        console.error("Error fetching retro tshirts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRetro();
  }, []);

  return <section>
      <RetroList retro={retroTshirts} isLoading={isLoading} />
    </section>
  
};

export default RetroContainer;
