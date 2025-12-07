import React, {useContext,useState} from "react";
import {  slide as Menu } from "react-burger-menu";
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../App'; // importamos desde App.js


const Nav = () => {

  //Contexto
  const { isLogged } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="barNav" >
    <nav>
     <h2  className="logo">DAM.</h2>
    </nav>
    <Menu right isOpen={menuOpen} onStateChange={handleStateChange} >
        <Link to="/" className="menu-item" onClick={closeMenu}>Home</Link>
        <Link to="/ligas" className="menu-item" onClick={closeMenu}>Ligas</Link>
        <Link to="/retro" className="menu-item" onClick={closeMenu}>Retro</Link>
        <Link to="/especiales" className="menu-item" onClick={closeMenu}>Especiales</Link>
        <Link to="/favorites" className="menu-item" onClick={closeMenu}>Favoritos</Link>
        <Link to="/profile" className="menu-item" onClick={closeMenu}>Perfil</Link>
        <Link to="/carrito" className="menu-item" onClick={closeMenu}>Carrito</Link>
        <Link to="/contact" className="menu-item" onClick={closeMenu}>Contacto</Link>
        {isLogged && <span className="menu-item menu-logged">Usuario logueado</span>}
    </Menu>
    </div>
    ) 
     
};

export default Nav;
