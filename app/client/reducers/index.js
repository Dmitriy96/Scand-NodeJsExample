import { combineReducers } from 'redux'
import { RECEIVE_AUTHORS } from '../actions/receive-authors'
import { UPDATE_AUTHOR } from '../actions/update-author'
import { CREATE_AUTHOR } from '../actions/create-author'
import { DELETE_AUTHOR } from '../actions/delete-author'
import { SHOW_MODAL } from '../actions/show-modal'
import { HIDE_MODAL } from '../actions/hide-modal'


function authors(state = {
    updatedAuthor: null,
    newAuthor: null,
    id: null,
    authors: []
}, action) {
    switch (action.type) {
        case RECEIVE_AUTHORS: {
            return Object.assign({}, state, {
                authors: action.authors
            });
        } break;
        case UPDATE_AUTHOR: {
            let newState = Object.assign({}, state, {
                updatedAuthor: action.updatedAuthor,
                id: action.id
            });
            newState.authors = newState.authors.map(function (author) {
                return author.id == action.id ? action.updatedAuthor : author;
            });
            return newState;
        } break;
        case DELETE_AUTHOR: {
            let newState = Object.assign({}, state, {
                surname: null
            });
            let author = newState.authors.find(function (author) {
                return author.id == action.id;
            });
            var index = newState.authors.indexOf(author);
            newState.authors.splice(index, 1);
            return newState;
        } break;
        case CREATE_AUTHOR: {
            let newState = Object.assign({}, state, {
                newAuthor: null
            });
            newState.authors.push(action.newAuthor);
            return newState;
        } break;
        default:
            return state
    }
}


function modal(state = {
    modalType: null,
    id: null
}, action) {
    switch (action.type) {
        case SHOW_MODAL:
            return Object.assign({}, state, {
                modalType: action.modalType,
                id: action.id
            });
            break;
        case HIDE_MODAL:
            return Object.assign({}, state, {
                modalType: action.modalType,
                id: null
            });
            break;
        default:
            return state
    }
}

const reducers = combineReducers({
    authors,
    modal
});

export default reducers;