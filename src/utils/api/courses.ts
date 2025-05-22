import axiosApi, { backendUrl } from '../apiCall';

import axios from 'axios';
import course from './schema/course';






export const getCourses = async (fields: string[]) => {
    const response = await axiosApi.post('', {
        query: `
            query Courses {
                courses(pagination: {pageSize: 100}) {
                    ${course}
                }
            }
        `
    });

    console.log(response.data.data);

    const data = response.data.data.courses.map((course: any) => {
        return {
            documentId: course.documentId,
            title: course.title,
            description: course.description,
            level: course.level,
            on_sale: course.on_sale,
            has_certificate: course.has_certificate,
            overview: course.overview,
            slug: course.slug,
            createdAt: course.createdAt,
            updatedAt: course.updatedAt,
            publishedAt: course.publishedAt,
            url_slug: course.url_slug,
            image: backendUrl + course.image_url?.url,
            rating: course.rating?.overall_rating,
            total_enrolled: course.enrolled_students?.total_enrolled,
            
        }
    });
    return data;
}


export const getCourse = async (id: string) => {
    const response = await axiosApi.post('', {
        query: `
            query Course($documentId: ID!) {
                course(documentId: $documentId) {
                    ${course}
                }
            }
        `,
        variables: {
            documentId: id
        }
    });

    console.log(response);
   
    const data = [response.data?.data?.course].map((course: any) => {
        return {
            id: course.id,
            documentId: course.documentId,
            title: course.title,
            description: course.description,
            level: course.level,
            on_sale: course.on_sale,
            has_certificate: course.has_certificate,
            overview: course.overview,
            slug: course.slug,
            createdAt: course.createdAt,
            updatedAt: course.updatedAt,
            publishedAt: course.publishedAt,
            url_slug: course.url_slug,
            image: backendUrl + course.image_url?.url,
            enrolled_avatars: course.enrolled_students?.enrolled_avatars?.map((avatar: any) => {
                return {
                    url: backendUrl + avatar.url,
                    name: avatar.name
                }
            }),
            total_enrolled: course.enrolled_students?.total_enrolled,
            rating: course.rating?.overall_rating,
            total_rated: course.rating?.total_rated,
            curriculum: course.curriculum
        }
    });
    return data;
}

