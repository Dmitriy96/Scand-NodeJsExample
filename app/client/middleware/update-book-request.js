import request from 'superagent';
import { UPDATE_BOOK } from './../actions/update-book'

export const updateBookRequest = store => next => action => {
    if (action.type !== UPDATE_BOOK) {
        return next(action)
    }
    let preparingRequest = request.put(`${action.baseUrl}/${action.authorId}/books/${action.updatedBook.id}`);
    for (let property in action.updatedBook) {
        if (action.updatedBook.hasOwnProperty(property)) {
            preparingRequest.field(property, action.updatedBook[property])
        }
    }
    preparingRequest.end((err, res) => {
        if (!err && res.ok) {
            return next(action)
        }
    });
    //request
    //    .put(`${action.baseUrl}/${action.authorId}/books/${action.updatedBook.id}`)
    //    .send(`updatedBook=${JSON.stringify(action.updatedBook)}`)
    //    .end((err, res) => {
    //        if (!err && res.ok) {
    //            return next(action)
    //        }
    //    });
};