export const DELETE_BOOK = 'DELETE_BOOK';

export function deleteBook(bookId, authorId, url) {
    return {
        type: DELETE_BOOK,
        bookId: bookId,
        authorId: authorId,
        baseUrl: url
    }
};