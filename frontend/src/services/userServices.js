import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
//http://localhost:3000/api/users/signup -POST
//http://localhost:3000/api/users/login -POST
//http://localhost:3000/api/users/logout -GET

const api = axios.create({
    withCredentials: true, // importante para enviar y recibir cookies HttpOnly
});

// SIGN UP
export const signup = async (userData) => {
    try {
        const response = await api.post(`${API_URL}/api/users/signup`,userData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { msg: 'Error en signup' };
    }
};

// LOG IN
export const login = async (userData) => {
    try {
        const response = await api.post(`${API_URL}/api/users/login`,userData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { msg: 'Error en login' };
    }
};

//LOG OUT
export const logout = async () => {
    try {
        const response = await api.get(`${API_URL}/api/users/logout`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { msg: 'Error en logout' };
    }
};