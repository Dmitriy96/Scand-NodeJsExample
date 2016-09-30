import request from 'superagent';
import { CREATE_BOOK } from './../actions/create-book'

export const createBookRequest = store => next => action => {
    console.log('createBookRequest middleware 1', action);
    if (action.type !== CREATE_BOOK) {
        return next(action)
    }
    request
        .post(`${action.baseUrl}/${action.authorId}/books`)
        .send(`newBook=${JSON.stringify(action.newBook)}`)
        .end((err, res) => {
            console.log('createBookRequest middleware 2', res);
            if (!err && res.ok) {
                action.newBook = res.body;
                return next(action)
            }
        });
};