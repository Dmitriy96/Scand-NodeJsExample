export const DELETE_AUTHOR = 'DELETE_AUTHOR';

export function deleteAuthor(id) {
    return {
        type: DELETE_AUTHOR,
        id: id
    }
};