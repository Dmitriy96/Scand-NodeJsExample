export const SHOW_BOOKS = 'SHOW_BOOKS';

export function showBooks(authorId) {
    return {
        type: SHOW_BOOKS,
        authorId: authorId
    }
};