import request from 'superagent';
import { UPDATE_AUTHOR } from './../actions/update-author'

export const updateAuthorRequest = store => next => action => {
    if (action.type !== UPDATE_AUTHOR) {
        return next(action)
    }
    console.log('updateAuthorRequest middleware 1', action, store.getState());
    request
        .put(`${action.baseUrl}/${action.id}`)
        .send(`updatedAuthor=${JSON.stringify(action.updatedAuthor)}`)
        .end((err, res) => {
            console.log('updateAuthorRequest middleware 2', res);
            if (!err && res.ok) {
                return next(action)
            }
        });
};