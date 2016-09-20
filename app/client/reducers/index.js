import { combineReducers } from 'redux'
import { RECEIVE_AUTHORS } from '../actions/receive-authors'
import { UPDATE_AUTHOR } from '../actions/update-author'
import { SHOW_MODAL } from '../actions/show-modal'
import { HIDE_MODAL } from '../actions/hide-modal'


function authors(state = {
    updatedAuthor: null,
    surname: null,
    authors: []
}, action) {
    switch (action.type) {
        case RECEIVE_AUTHORS:
            return Object.assign({}, state, {
                authors: action.authors
            });
            break;
        case UPDATE_AUTHOR:
            let newState = Object.assign({}, state, {
                updatedAuthor: action.updatedAuthor,
                surname: action.surname
            });
            newState.authors = newState.authors.map(function(author) {
                return author.surname == action.surname ? action.updatedAuthor : author;
            });
            return newState;
            break;
        default:
            return state
    }
}


function modal(state = {
    modalType: null,
    surname: null
}, action) {
    switch (action.type) {
        case SHOW_MODAL:
            return Object.assign({}, state, {
                modalType: action.modalType,
                surname: action.surname
            });
        break;
        case HIDE_MODAL:
            return Object.assign({}, state, {
                modalType: action.modalType,
                surname: null
            });
            break;
        default:
            return state
    }
}

const reducers = combineReducers({
    authors,
    //author,
    modal
});

export default reducers;