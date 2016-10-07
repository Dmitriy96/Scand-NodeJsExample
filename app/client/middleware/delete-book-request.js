import request from 'superagent';
import { DELETE_BOOK } from './../actions/delete-book'

export const deleteBookRequest = store => next => action => {
    if (action.type !== DELETE_BOOK) {
        return next(action)
    }
    request
        .del(`${action.baseUrl}/${action.authorId}/books/${action.bookId}`)
        .end((err, res) => {
            if (!err && res.ok) {
                return next(action)
            }
        });
};
