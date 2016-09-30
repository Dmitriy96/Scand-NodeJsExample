export const UPDATE_AUTHOR = 'UPDATE_AUTHOR';

export function updateAuthor(id, url, updatedAuthor) {
    return {
        type: UPDATE_AUTHOR,
        id: id,
        baseUrl: url,
        updatedAuthor: updatedAuthor
    }
};