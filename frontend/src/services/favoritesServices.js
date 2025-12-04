import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

//http://localhost:3000/api/favorites GET (+ token en header)
//http://localhost:3000/api/favorites/addfavorite POST (+ body(tshirt_id)+token en header)
//http://localhost:3000/api/favorites/deletefavorite DELETE (+ body(tshirt_id)+token en header)

const api = axios.create({
    withCredentials: true, // importante para enviar y recibir cookies HttpOnly
});

// api.interceptors.request.use((config) => {
//     const token = localStorage.getItem('token'); // <- aquí debe estar guardado el JWT
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// });


// GET-FAVORITES users
export const getAllFavoritesByUser = async () => {
    try {
        const response = await api.get(`${API_URL}/api/favorites`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { msg: 'Error al leer favoritos' };
    }
};

//POST
export const postFavorites = async (tshirt_id ) => {
    try {
        const response = await api.post(`${API_URL}/api/favorites/addfavorite`,{tshirt_id });
        return response.data;
    } catch (error) {
        throw error.response?.data || { msg: 'Error al añadir a favoritos' };
    }
};

//DELETE
export const deleteFavorite = async (tshirt_id ) => {
    try {
        const response = await api.delete(`${API_URL}/api/favorites/deletefavorite`,{data:{ tshirt_id }});
        return response.data;
    } catch (error) {
        throw error.response?.data || { msg: 'Error al borrar a favorito' };
    }
};

