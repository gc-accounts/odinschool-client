import axios from 'axios';

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

const axiosApi = axios.create({
    baseURL: backendUrl + '/graphql',
    headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_BACKEND_TOKEN}`
    }
});

export default axiosApi;








