import React from "react";
import { useNavigate } from "react-router-dom";
import {logout } from '../../../services/userServices'
import { Link } from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Error en logout", error);
    }
  };
  return <div>
    <h1>Esto es tu perfil</h1>
    <button onClick={handleLogout}>Cerrar sesión</button>
    <button><Link to="/">Home</Link></button>
    {/* <button><Link to="/favorites">Favoritos</Link></button> */}
    {/* <button><Link to="/shop">Carrito</Link></button> */}
    
  </div>;
};

export default Profile;
