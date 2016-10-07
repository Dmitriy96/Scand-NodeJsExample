import request from 'superagent';
import { CREATE_AUTHOR } from './../actions/create-author'

export const createAuthorRequest = store => next => action => {
    if (action.type !== CREATE_AUTHOR) {
        return next(action)
    }
    let preparingRequest = request.post(action.baseUrl);
    for (let property in action.newAuthor) {
        if (action.newAuthor.hasOwnProperty(property)) {
            preparingRequest.field(property, action.newAuthor[property])
        }
    }
    preparingRequest.end((err, res) => {
        if (!err && res.ok) {
            action.newAuthor = res.body;
            return next(action)
        }
    });
};