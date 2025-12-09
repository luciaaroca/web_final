import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; //para que cuando termine de hacer algo nos redirija a otro componente
import {signup } from '../../../../services/userServices'
import Swal from 'sweetalert2';

const SignUpForm = () => {
  const [userData, setUserData] = useState({username:'', email: '', password: '' });
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //REGEX
    const usernameRegex = /^[a-zA-Z0-9_]{5,15}$/; //letras, números, guiones bajos (5-16 caract)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //no espacios/ unico @
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,16}$/; //al menos(1numeros + 1mayusc + 1minusc)(8-16 caract)

    if (!usernameRegex.test(userData.username)) {
      return setMsg("El usuario debe tener 5-15 caracteres, sin espacios");
    }

    if (!emailRegex.test(userData.email)) {
      return setMsg("Introduce un email válido");
    }

    if (!passwordRegex.test(userData.password)) {
      return setMsg("La contraseña debe tener al menos 8 caracteres, 1 número y 1 mayúscula");
    }
    try {
      const res = await signup (userData); // Llama al servicio de login
      Swal.fire({
        title: "Registro Exitoso",
        text: res.msg || "¡Tu cuenta ha sido creada!",
        icon: "success",
      })
      setTimeout(() => navigate('/login'), 1000); // Redirige al perfil
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
      <button type="submit">Sign Up</button>
      {msg && <p className="msg">{msg}</p>}
    </form>
};

export default SignUpForm;
