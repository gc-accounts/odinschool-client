import axios from 'axios';

export const backendUrl = import.meta.env.VITE_IS_DEVELOPMENT === 'true' ? '' : 'https://dawn-lake-1c80.lokeshrana9999.workers.dev';

const axiosApi = axios.create({
    baseURL: backendUrl + '/graphql',
    headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_BACKEND_TOKEN}`
    }
});

export default axiosApi;








