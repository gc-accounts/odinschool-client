import axiosApi, { backendUrl } from '../apiCall';
import webinarSchema from './schema/webinars';

const transformWebinarData = (webinar: any) => {
    return {
        id: webinar.documentId || `web-${Math.random().toString(36).substr(2, 9)}`,
        title: webinar.title,
        description: webinar.description,
        date: webinar.date,
        time: webinar.time,
        duration: webinar.duration,
        instructor: webinar.Instructor,
        about_instructor: webinar.about_instructor,
        price: webinar.price || 0,
        image: webinar.image_url ?? backendUrl + webinar.poster_url?.url,
        category: webinar.category || "Web Development",
        tags: webinar.tags?.split(',') || [],
        isFeatured: webinar.isFeatured || false,
        isPaid: (webinar.price && webinar.price > 0) ? true : false,
        status: new Date(webinar.date) < new Date() ? "past" : "upcoming",
    };
};

export const getWebinars = async () => {
    const response = await axiosApi.post('', {
        query: `    
            query Webinars {
                webinars {
                    ${webinarSchema}
                }
            }
        `
    });

    return response.data.data.webinars.map(transformWebinarData);
};

export const getWebinar = async (id: string) => {
    const response = await axiosApi.post('', {
        query: `
            query Webinar($documentId: ID!) {
                webinar(documentId: $documentId) {
                    ${webinarSchema}
                }
            }
        `,
        variables: { documentId: id }
    });

    return transformWebinarData(response.data.data.webinar);
};

