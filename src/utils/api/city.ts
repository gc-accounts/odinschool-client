import { citySchema } from "./schema/cities";
import axiosApi, { backendUrl } from '../apiCall';


export const getCities = async (pageNumber: number = 1, pageSize: number = 10) => {
    const response = await axiosApi.post('', {
        query: `
            query Cities {
                cities(pagination: {pageSize: ${pageSize}, page: ${pageNumber ?? 1}}) {
                    ${citySchema}
                }
            }
        `
    });

    return response.data.data.cities;
};
