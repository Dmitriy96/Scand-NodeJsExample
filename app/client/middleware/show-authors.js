import { SHOW_AUTHORS } from './../actions/show-authors'
import { push } from 'react-router-redux'

export const showAuthors = store => next => action => {
    if (action.type !== SHOW_AUTHORS) {
        return next(action)
    }
    store.dispatch(push(`/authors`));
    next(action);
};