import { SHOW_AUTHOR_MODAL } from './../actions/show-author-modal'
import { SHOW_BOOK_MODAL } from './../actions/show-book-modal'
import { push } from 'react-router-redux'

export const showModal = store => next => action => {
    console.log('showModal middleware 0', action);
    if (action.type !== SHOW_AUTHOR_MODAL && action.type !== SHOW_BOOK_MODAL) {
        return next(action)
    }
    console.log('showModal middleware 1', action);
    let hash;
    switch (action.modalType) {
        case 'EDIT_AUTHOR':
            hash = `authors/${action.id}/edit`;
            break;
        case 'CREATE_AUTHOR':
            hash = `authors/create`;
            break;
        case 'EDIT_BOOK':
            hash = `authors/${action.authorId}/books/${action.bookId}/edit`;
            break;
        case 'CREATE_BOOK':
            hash = `authors/${action.authorId}/books/create`;
            break;
    }
    console.log('showModal middleware 2', hash);
    store.dispatch(push(hash));
    next(action);
};