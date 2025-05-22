import axios from 'axios';

const BASE_URL = 'https://quotes-5433.onrender.com/api';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api; 