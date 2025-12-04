import React, { useState,useContext } from "react";
import { useNavigate } from 'react-router-dom'; //para que cuando termine de hacer algo nos redirija a otro componente
import {login } from '../../../../services/userServices'
import { AuthContext } from '../../../../App';
import Swal from 'sweetalert2';

const LogInForm = () => {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
  const { setIsLogged } = useContext(AuthContext); // <-- usamos el contexto

  //Al escribir en un input ->Actualiza el estado del formulario (userData) 
  //e.target.name -> saber el campo en el que se está escribiendo ("email")
  //e.target.value ->para tomar el valor actual. ("lucia@email.com")
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  //Al enviar el formulario ->Envía los datos al backend, maneja respuesta y redirección
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(userData); // Llama al servicio de login
      setIsLogged(true); // <-- marcamos usuario como logueado
      Swal.fire({
        title: "Login Exitoso",
        text: res.msg || "¡Bienvenido!",
        icon: "success",
        })
      setTimeout(() => navigate('/profile'), 1000); // Redirige al perfil
    } catch (error) {
      setMsg(error.msg || 'Credenciales inválidas');
    }
  };
  return <form onSubmit={handleSubmit} className="login-form">
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={userData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={userData.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Iniciar sesión</button>
      {msg && <p className="msg">{msg}</p>}
    </form>;
};

export default LogInForm;
