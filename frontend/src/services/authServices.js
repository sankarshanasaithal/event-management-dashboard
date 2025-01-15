import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const login = async (credentials) => {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
};

export const validateToken = async (token) => {
    const response = await axios.get(`${API_URL}/validate-token`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};