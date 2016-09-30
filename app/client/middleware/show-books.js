import { SHOW_BOOKS } from './../actions/show-books'
import { push } from 'react-router-redux'

export const showBooks = store => next => action => {
    if (action.type !== SHOW_BOOKS) {
        return next(action)
    }
    store.dispatch(push(`/authors/${action.authorId}/books`));
    next(action);
};