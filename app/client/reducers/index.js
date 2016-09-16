import { combineReducers } from 'redux'
import { RECEIVE_AUTHORS } from '../actions/receive-authors'
import { INCREMENT } from '../actions/increment'


function authors(state = {
    authors: []
}, action) {
    switch (action.type) {
        case RECEIVE_AUTHORS:
            return Object.assign({}, state, {
                authors: action.authors
            });
            break;
        case INCREMENT:
            let newStateInc = Object.assign({}, state, {
                value: ++action.value,
                surname: action.surname
            });
            console.log('INCREMENT ', newStateInc);
            return newStateInc;
            break;
        default:
            return state
    }
}

const reducers = combineReducers({
    authors
});

export default reducers;