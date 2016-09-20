export const UPDATE_AUTHOR = 'UPDATE_AUTHOR';

export function updateAuthor(surname, updatedAuthor) {
    return {
        type: UPDATE_AUTHOR,
        surname: surname,
        updatedAuthor: updatedAuthor
    }
};