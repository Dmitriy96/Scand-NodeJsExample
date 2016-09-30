import request from 'superagent';
import { DELETE_AUTHOR } from './../actions/delete-author'

export const deleteAuthorRequest = store => next => action => {
    if (action.type !== DELETE_AUTHOR) {
        return next(action)
    }
    request
        .del(`${action.baseUrl}/${action.id}`)
        .end((err, res) => {
            if (!err && res.ok) {
                //return store.dispatch(deleteAuthor(action.id))
                return next(action)
            }
        });
};