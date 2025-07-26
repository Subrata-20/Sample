import axios from 'axios';

// Replace with your actual backend URL (Cloud Run / local IP)
const API_BASE_URL = 'http://10.110.133.117:8000';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});
