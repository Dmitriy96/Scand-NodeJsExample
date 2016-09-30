export const CREATE_AUTHOR = 'CREATE_AUTHOR';

export function createAuthor(url, newAuthor) {
    return {
        type: CREATE_AUTHOR,
        baseUrl: url,
        newAuthor: newAuthor
    }
};