import axiosApi, { backendUrl } from "../apiCall";
import learning_hub from "./schema/learning_hub";


function modifyCourseModules(courseModules: any) {
    return courseModules.map((module: any) => {
        return {
            ...module,
            image: module.image?.url ? backendUrl + module.image?.url : module.image_url,
            video: module.video?.url ? backendUrl + module.video?.url : module.video_slug,
            isYoutube: module.video?.url ? false : module.video_slug ? true : false,
            id: module.documentId
        }
    })
}


export const getLearningHubCourses = async ({ pageNumber = 1, city = '', isFeatured = undefined, search = '', category = '', level = '' }) => {

    let filterObj: any = {}
    let paginationObj: any = {
        pageSize: 10,
        page: pageNumber
    }
    if (city !== "") {
        filterObj.city = { name: { eq: city } }
    }

    if (isFeatured != undefined) {
        filterObj.is_featured = { eq: isFeatured }
    }
    if (search !== "") {
        filterObj.or = [
            { title: { containsi: search } },
            { description: { containsi: search } }
        ]
    }
    filterObj.is_learning_hub = { eq: true }

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
                    ${learning_hub}
                }
            }
        `,
        variables: {
            filters: filterObj,
            pagination: paginationObj
        }
    });


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
            curriculum: course.curriculum,
            modules: modifyCourseModules(course.course_modules)
        }
    });
    return data;
}


export const getLearningHubCourse = async (id: string) => {
    const response = await axiosApi.post('', {
        query: `
            query Course($documentId: ID!) {
                course(documentId: $documentId) {
                    ${learning_hub}
                }
            }
        `,
        variables: {
            documentId: id
        }
    });

    return {
        documentId: response.data.data.course.documentId,
        title: response.data.data.course.title,
        description: response.data.data.course.description,
        level: response.data.data.course.level,
        on_sale: response.data.data.course.on_sale,
        has_certificate: response.data.data.course.has_certificate,
        overview: response.data.data.course.overview,
        slug: response.data.data.course.slug,
        createdAt: response.data.data.course.createdAt,
        updatedAt: response.data.data.course.updatedAt,
        publishedAt: response.data.data.course.publishedAt,
        url_slug: response.data.data.course.url_slug,
        image: response.data.data.course.image_url_string ? response.data.data.course.image_url_string : backendUrl + response.data.data.course.image_url?.url,
        curriculum: response.data.data.course.curriculum,
        modules: modifyCourseModules(response.data.data.course.course_modules)
    }
}


