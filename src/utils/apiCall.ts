import axios from 'axios';

export const backendUrl = import.meta.env.VITE_IS_DEVELOPMENT === 'true' ? 'http://13.203.229.113:1337' : '/api';

const axiosApi = axios.create({
    baseURL: backendUrl + '/graphql',
    headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_BACKEND_TOKEN}`
    }
});

export default axiosApi;








