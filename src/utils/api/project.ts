import axiosApi, { backendUrl } from "../apiCall";
import project from "./schema/project";


function convertSchema(project: any) {
    return {
        id: project.documentId,
        title: project.title,
        description: project.description,
        category: project.category.replaceAll("_", " "),
        video: backendUrl + project.poster?.url,
        downloadUrl: backendUrl + project.file?.url,
        fileSize: project.file?.size,
        fileFormat: project.file?.ext,
        createdAt: project.publishedAt,
        popularity: project.downloads,
        tags: project.tags?.split(',')?.map((tag: string) => {
            tag = tag.trim();
            // replace all underscores with spaces
            // @ts-ignore
            tag = tag.replaceAll("_", " ");
            return tag;
        })
    };
}



export const getProjects = async ({ pageNumber = 1, pageSize = 10, category = '', search = '' }) => {

    let filterObj: any = {

    };

    let paginationObj: any = {
        pageSize: pageSize,
        page: pageNumber
    };
    if (search !== "") {

        filterObj.or = [
            { title: { containsi: search } },
            { description: { containsi: search } }
        ]

    }
    if (category !== "") {
        filterObj.category = { containsi: category }
    }

    const response = await axiosApi.post('', {
        query: `
            query Projects (
                $filters: ProjectFiltersInput
                $pagination: PaginationArg
            ) {
                projects(
                    pagination: $pagination,
                    filters: $filters
                ) {
                    ${project}
                }
            }
        `,
        variables: {
            filters: filterObj,
            pagination: paginationObj
        }
    });
    return response.data.data.projects.map(convertSchema);
}