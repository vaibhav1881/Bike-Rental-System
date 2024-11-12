import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

const register = (userData) => axios.post(`${API_URL}/register`, userData);
const login = (userData) => axios.post(`${API_URL}/login`, userData);

export { register, login };
