import request from 'superagent';
import { CREATE_AUTHOR } from './../actions/create-author'

export const createAuthorRequest = store => next => action => {
    if (action.type !== CREATE_AUTHOR) {
        return next(action)
    }
    request
        .post(action.baseUrl)
        .send(`newAuthor=${JSON.stringify(action.newAuthor)}`)
        .end((err, res) => {
            if (!err && res.ok) {
                action.newAuthor = res.body;
                return next(action)
            }
        });
};