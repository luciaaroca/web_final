import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL; // Usar variable de entorno para la URL base
//http://localhost:3000/api/orders


export const postOrder = async (user_id, carrito) => {

  console.log(user_id,carrito)

    try {
        const response = await axios.post(`${API_URL}/api/orders`,{user_id, carrito});
        return response.data;
    } catch (error) {
        console.error('Error al crear orden:', error);
        throw error;
    }
};