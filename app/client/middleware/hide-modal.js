import { HIDE_AUTHOR_MODAL } from './../actions/hide-author-modal'
import { HIDE_BOOK_MODAL } from './../actions/hide-book-modal'
import { goBack } from 'react-router-redux'

export const hideModal = store => next => action => {
    if (action.type !== HIDE_AUTHOR_MODAL && action.type !== HIDE_BOOK_MODAL) {
        return next(action)
    }
    store.dispatch(goBack());
    next(action);
};