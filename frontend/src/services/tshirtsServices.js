import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL; // Usar variable de entorno para la URL base
//http://localhost:3000/api/tshirts
//http://localhost:3000/api/tshirts/:name
//http://localhost:3000/api/tshirts/type/:type
//http://localhost:3000/api/tshirts/type/Liga/:league_name

export const getAllTshirts = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/tshirts`);
        return response.data;
    } catch (error) {
        console.error('Error fetching all authors:', error);
        throw error;
    }
};

export const getTshirtsByName = async(name)=>{
    try {
        const response = await axios.get(`${API_URL}/api/tshirts/${name}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching all authors:', error);
        throw error;
    }  
}

export const getTshirtsById = async(tshirt_id)=>{
    try {
        const response = await axios.get(`${API_URL}/api/tshirts/id/${tshirt_id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching all authors:', error);
        throw error;
    }  
}
export const getAllLigaTshirts = async () => {
   
    try {
        const response = await axios.get(`${API_URL}/api/tshirts/type/Liga`);
        return response.data;
    } catch (error) {
        console.error('Error fetching all authors:', error);
        throw error;
    }
};

export const getAllLigaTshirtsByName = async (league_name) => {
   
    try {
        const response = await axios.get(`${API_URL}/api/tshirts/type/Liga/${league_name}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching all authors:', error);
        throw error;
    }
};

export const getRetro = async () => {
   
    try {
        const response = await axios.get(`${API_URL}/api/tshirts/type/Retro`);
        return response.data;
    } catch (error) {
        console.error('Error fetching all authors:', error);
        throw error;
    }
};

