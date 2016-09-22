export const CREATE_AUTHOR = 'CREATE_AUTHOR';

export function createAuthor(newAuthor) {
    return {
        type: CREATE_AUTHOR,
        newAuthor: newAuthor
    }
};