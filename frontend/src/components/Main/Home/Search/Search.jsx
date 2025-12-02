import React,{useState} from "react";
import {getTshirtsByName} from "../../../../services/tshirtsServices";

const Search = ({setTshirts}) => {
  const [input, setInput] = useState("");
  
    const handleSearch = async () => {
    if (input.trim() === "") return;

    const data = await getTshirtsByName(input.trim());
    setTshirts(data);  // el backend devuelve 1 elemento → lo metemos en lista
  };
  return <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Buscar camiseta..."
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>;
};

export default Search;
