import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth';

export const signup = async (userData) => {
    return await axios.post(`${API_URL}/signup`, userData);
};

export const signin = async (loginData) => {
    return await axios.post(`${API_URL}/signin`, loginData);
};