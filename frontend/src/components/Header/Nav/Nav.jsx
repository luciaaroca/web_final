import React from "react";
import { Link } from 'react-router-dom'

const Nav = () => {
  return <nav>
     <li><Link to="/">Home</Link></li>
     <li><Link to="/ligas">Ligas</Link></li>
    <li><Link to="/retro">Retro</Link></li>
    <li><Link to="/especiales">Especiales</Link></li>
    <li><Link to="/favorites">Favoritos</Link></li>
    <li><Link to="/profile">Perfil</Link></li>
     {/*<li><Link to="/perfil">Contacto</Link></li>
     <li><Link to="/carrito">Contacto</Link></li> */}
     
    </nav>;
};

export default Nav;
