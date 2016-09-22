import request from 'superagent';
import { deleteAuthor } from './delete-author'

export function deleteAuthorRequest(id, url, dispatch) {
    request
        .delete(`${url}/${id}`)
        .end((err, res) => {
            if (!err && res.ok) {
                return dispatch(deleteAuthor(id))
            }
        });
};