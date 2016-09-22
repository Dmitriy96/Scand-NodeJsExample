export const UPDATE_AUTHOR = 'UPDATE_AUTHOR';

export function updateAuthor(id, updatedAuthor) {
    return {
        type: UPDATE_AUTHOR,
        id: id,
        updatedAuthor: updatedAuthor
    }
};