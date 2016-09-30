import request from 'superagent';
import { UPDATE_BOOK } from './../actions/update-book'

export const updateBookRequest = store => next => action => {
    if (action.type !== UPDATE_BOOK) {
        return next(action)
    }
    console.log('updateBookRequest middleware 1', action, store.getState());
    request
        .put(`${action.baseUrl}/${action.authorId}/books/${action.updatedBook.id}`)
        .send(`updatedBook=${JSON.stringify(action.updatedBook)}`)
        .end((err, res) => {
            console.log('updateBookRequest middleware 2', res);
            if (!err && res.ok) {
                return next(action)
            }
        });
};