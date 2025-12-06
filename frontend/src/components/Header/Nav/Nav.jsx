import React, {useContext} from "react";
import {  slide as Menu } from "react-burger-menu";
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../App'; // importamos desde App.js


const Nav = () => {

  //Contexto
  const { isLogged } = useContext(AuthContext);

  return (
    <div className="barNav" >
    <nav>
      <p>GolWear</p>
    </nav>
    <Menu right>
        <Link to="/" className="menu-item">Home</Link>
        <Link to="/ligas" className="menu-item">Ligas</Link>
        <Link to="/retro" className="menu-item">Retro</Link>
        <Link to="/especiales" className="menu-item">Especiales</Link>
        <Link to="/favorites" className="menu-item">Favoritos</Link>
        <Link to="/profile" className="menu-item">Perfil</Link>
        <Link to="/carrito" className="menu-item">Carrito</Link>
        <Link to="/contact" className="menu-item">Contacto</Link>
        {isLogged && <span className="menu-item">Usuario logueado</span>}
    </Menu>
    </div>
    ) 
     
};

export default Nav;
