import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; //para que cuando termine de hacer algo nos redirija a otro componente
import {signup } from '../../../../services/userServices'

const SignUpForm = () => {
  const [userData, setUserData] = useState({username:'', email: '', password: '' });
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signup (userData); // Llama al servicio de login
      setMsg(res.msg || 'Registro realizado con exito');
      setTimeout(() => navigate('/profile'), 1000); // Redirige al perfil
    } catch (error) {
        setMsg(error.msg || 'Error en el registro');
      }
    };

  return <form onSubmit={handleSubmit} className="signup-form">
      <input
        type="text"
        name="username"
        placeholder="Usuario"
        value={userData.username}
        onChange={handleChange}
        required
      />
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
      <button type="submit">Registrarse</button>
      {msg && <p className="msg">{msg}</p>}
    </form>
};

export default SignUpForm;
