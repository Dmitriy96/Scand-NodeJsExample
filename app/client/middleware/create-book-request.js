import request from 'superagent';
import { CREATE_BOOK } from './../actions/create-book'

export const createBookRequest = store => next => action => {
    if (action.type !== CREATE_BOOK) {
        return next(action)
    }
    let preparingRequest = request.post(`${action.baseUrl}/${action.authorId}/books`);
    for (let property in action.newBook) {
        if (action.newBook.hasOwnProperty(property)) {
            if (action.newBook[property] instanceof Date) {
                preparingRequest.field(property, action.newBook[property].toJSON())
            } else {
                preparingRequest.field(property, action.newBook[property])
            }
        }
    }
    preparingRequest.end((err, res) => {
        if (!err && res.ok) {
            action.newBook = res.body;
            return next(action)
        }
    });
};