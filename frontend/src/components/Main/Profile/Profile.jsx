import React,{ useEffect,useContext} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import {logout } from '../../../services/userServices'
import { getAllFavoritesByUser } from '../../../services/favoritesServices';
import { AuthContext } from '../../../App'


const Profile = () => {
  const navigate = useNavigate();
  const { isLogged, setIsLogged } = useContext(AuthContext); 

  //Comprobar si estamos logueados
  useEffect(() => {
    const checkLogin = async () => {
      try {
        await getAllFavoritesByUser(); // cualquier endpoint que requiera login
        setIsLogged(true); // usuario logueado

      } catch (error) {
        console.error(error);
        setIsLogged(false); // usuario no logueado
      }
    };
    checkLogin();
    }, [setIsLogged]);

    //Hacer Log Out
    const handleLogout = async () => {
    try {
      await logout();
      setIsLogged(false);
      navigate("/");
    } catch (error) {
      console.error("Error en logout", error);
      }
    };
  return <div>
      <div>
      {isLogged ? (
        <div>
          <h1>Bienvenido a tu perfil</h1>
          <button onClick={handleLogout}>Cerrar sesión</button>
          <Link to="/">Home</Link> | 
          <Link to="/favorites">Favoritos</Link>
        </div>
      ) : (
        <div>
          <h1>¿Todavía no tienes cuenta?</h1>
          <Link to="/login">Inicia sesión</Link>
          <Link to="/signup">Registrase</Link>
        </div>
      )}
    </div>
    
  </div>;
};

export default Profile;
