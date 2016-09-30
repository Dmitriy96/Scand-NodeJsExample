export const UPDATE_BOOK = 'UPDATE_BOOK';

export function updateBook(authorId, url, updatedBook) {
    return {
        type: UPDATE_BOOK,
        authorId: authorId,
        baseUrl: url,
        updatedBook: updatedBook
    }
};