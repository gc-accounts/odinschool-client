import axios from 'axios';

const axiosApi = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL + '/graphql',
    headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_BACKEND_TOKEN}`
    }
});

export default axiosApi;








