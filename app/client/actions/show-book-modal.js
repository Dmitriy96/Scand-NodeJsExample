export const SHOW_BOOK_MODAL = 'SHOW_BOOK_MODAL';

export function showBookModal(modalType, authorId, bookId) {
    return {
        type: SHOW_BOOK_MODAL,
        modalType: modalType,
        authorId: authorId,
        bookId: bookId
    }
};