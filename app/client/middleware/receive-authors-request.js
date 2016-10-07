import request from 'superagent';
import { RECEIVE_AUTHORS } from './../actions/receive-authors'

export const receiveAuthorsRequest = store => next => action => {
    if (action.type !== RECEIVE_AUTHORS) {
        return next(action)
    }
    request
        .get(action.baseUrl)
        .end((err, res) => {
            if (!err && res.ok) {
                console.log('middleware receiveAuthorsRequest', res);
                action.authors = res.body;
                return next(action)
            }
        });
};