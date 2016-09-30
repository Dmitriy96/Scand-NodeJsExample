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
                action.authors = res.body;
                //return store.dispatch(deleteAuthor(action.id))
                return next(action)
            }
        });
};