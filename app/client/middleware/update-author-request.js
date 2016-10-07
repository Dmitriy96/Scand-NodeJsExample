import request from 'superagent';
import { UPDATE_AUTHOR } from './../actions/update-author'

export const updateAuthorRequest = store => next => action => {
    if (action.type !== UPDATE_AUTHOR) {
        return next(action)
    }
    let preparingRequest = request.put(`${action.baseUrl}/${action.id}`);
    for (let property in action.updatedAuthor) {
        if (action.updatedAuthor.hasOwnProperty(property)) {
            preparingRequest.send(`${property}=${action.updatedAuthor[property]}`)
        }
    }
    preparingRequest.end((err, res) => {
        if (!err && res.ok) {
            return next(action)
        }
    });
};