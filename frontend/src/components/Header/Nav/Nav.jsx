import React, {useContext} from "react";
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../App'; // importamos desde App.js

const Nav = () => {

  //Contexto
  const { isLogged } = useContext(AuthContext);

  return <nav>
     <li><Link to="/">Home</Link></li>
     <li><Link to="/ligas">Ligas</Link></li>
    <li><Link to="/retro">Retro</Link></li>
    <li><Link to="/especiales">Especiales</Link></li>
    <li><Link to="/favorites">Favoritos</Link></li>
    <li><Link to="/profile">Perfil</Link></li>
    <li><Link to="/carrito">Carrito</Link></li>
    <li><Link to="/contact">Contacto</Link></li>
    {isLogged && <li>Usuario logueado</li>}
   
    
     
    </nav>;
};

export default Nav;
