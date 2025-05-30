import axiosApi, { backendUrl } from '../apiCall';
import course from './schema/course';



function modifyCourseModules(courseModules: any) {
    return courseModules?.map((module: any) => {
        return {
            ...module,
            image: module.image?.url ? backendUrl + module.image?.url : module.image_url,
            video: module.video?.url ? backendUrl + module.video?.url : module.video_slug,
            isYoutube: module.video?.url ? false : module.video_slug ? true : false
        }
    }) ?? []
}

export const getCourses = async ({pageNumber = 1, city = '', isFeatured = undefined, search = '', category = '', level = ''}) => {

    let filterObj: any = {}
    let paginationObj: any = {
        pageSize: 10,
        page: pageNumber
    }
    if (city !== "") {
        filterObj.city = { name: { eq: city } }
    }

    filterObj.or = [
        { "is_learning_hub": { "eq": false } },
        { "is_learning_hub": { "null": true } }
      ]

    if(isFeatured != undefined){
        filterObj.is_featured = { eq: isFeatured }
    }
    if (search !== "") {
        filterObj.or = [
            { title: { containsi: search } },
            { description: { containsi: search } }
        ]
    }

    // if (category !== "") {
    //     filterObj.category = { containsi: category }
    // }

    if (level !== "") {
        filterObj.level = { eq: level }
    }

    const response = await axiosApi.post('', {
        query: `
            query Courses (
                $filters: CourseFiltersInput
                $pagination: PaginationArg
            ) {
                courses(
                    pagination: $pagination,
                    filters: $filters
                ) {
                    ${course}
                }
            }
        `,
        variables: {
            filters: filterObj,
            pagination: paginationObj
        }
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
            image: course.image_url_string ? course.image_url_string : backendUrl + course.image_url?.url,
            rating: course.rating?.overall_rating,
            total_enrolled: course.enrolled_students?.total_enrolled,
            price: course.price,
            modules: modifyCourseModules(course.course_modules)
        }
    });
    return data;
}


export const getCourse = async (id: string, url_slug: string="") => {

    let courseItem = null;
    if(url_slug === ""){
    
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
    courseItem = response.data?.data?.course;
    }else{
        const filterObj: any = {
            url_slug: { eq: url_slug }
        }
        const response = await axiosApi.post('', {
            query: `
                query Courses($filters: CourseFiltersInput) {
                    courses(filters: $filters) {
                        ${course}
                    }
                }
            `,
            variables: {
                filters: filterObj
            }
        });
        courseItem = response.data?.data?.courses[0];
    }
    console.log(courseItem);
   
    const data = [courseItem].map((course: any) => {
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
            curriculum: course.curriculum,
            price: course.price,
            modules: modifyCourseModules(course.course_modules)
        }
    });
    return data;
}

