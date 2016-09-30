export const CREATE_BOOK = 'CREATE_BOOK';

export function createBook(url, authorId, newBook) {
    return {
        type: CREATE_BOOK,
        baseUrl: url,
        authorId: authorId,
        newBook: newBook
    }
};