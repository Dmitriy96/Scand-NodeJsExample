export const DELETE_AUTHOR = 'DELETE_AUTHOR';

export function deleteAuthor(id, url) {
    return {
        type: DELETE_AUTHOR,
        id: id,
        baseUrl: url
    }
};