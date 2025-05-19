import axios from 'axios';

const axiosApi = axios.create({
    baseURL: '/graphql',
    headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_BACKEND_TOKEN}`
    }
});

export default axiosApi;








