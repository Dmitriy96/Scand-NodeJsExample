import { combineReducers } from 'redux'
import _ from 'lodash'
import { RECEIVE_AUTHORS } from '../actions/receive-authors'
import { UPDATE_AUTHOR } from '../actions/update-author'
import { CREATE_AUTHOR } from '../actions/create-author'
import { DELETE_AUTHOR } from '../actions/delete-author'
import { SHOW_AUTHOR_MODAL } from '../actions/show-author-modal'
import { HIDE_AUTHOR_MODAL } from '../actions/hide-author-modal'
import { SHOW_BOOK_MODAL } from '../actions/show-book-modal'
import { HIDE_BOOK_MODAL } from '../actions/hide-book-modal'
import { SHOW_BOOKS } from '../actions/show-books'
import { CREATE_BOOK } from '../actions/create-book'
import { UPDATE_BOOK } from '../actions/update-book'
import { DELETE_BOOK } from '../actions/delete-book'


function mergeWithCustomizer(objValue, srcValue) {
    if (_.isArray(objValue)) {
        return _.uniqBy(objValue.concat(srcValue), 'id');
    }
    if (_.isObjectLike(objValue)) {
        return Object.assign({}, objValue, srcValue);
    }
}


function authors(state = {
    updatedAuthor: null,
    newAuthor: null,
    author: null,
    id: null,
    authors: []
}, action) {
    switch (action.type) {
        case RECEIVE_AUTHORS: {
            let newState = _.cloneDeep(state);
            action.authors.forEach(function(author) {
                author.books.forEach(function(book) {
                    book.publishingDate = new Date(book.publishingDate);
                })
            });
            _.mergeWith(newState, {
                authors: action.authors
            }, mergeWithCustomizer);
            return newState;
        } break;
        case UPDATE_AUTHOR: {
            let newState = _.cloneDeep(state);
            newState.authors.forEach(function(author) {
                if (author.id === action.updatedAuthor.id) {
                    _.mergeWith(author, action.updatedAuthor, mergeWithCustomizer);
                }
            });
            return newState;
        } break;
        case DELETE_AUTHOR: {
            let newState = _.cloneDeep(state);
            _.mergeWith(newState, {
                surname: null
            }, mergeWithCustomizer);
            let author = newState.authors.find(function (author) {
                return author.id == action.id;
            });
            let index = newState.authors.indexOf(author);
            newState.authors.splice(index, 1);
            return newState;
        } break;
        case CREATE_AUTHOR: {
            let newState = _.cloneDeep(state);
            _.mergeWith(newState, {
                newAuthor: null
            }, mergeWithCustomizer);
            newState.authors.push(action.newAuthor);
            return newState;
        } break;
        case SHOW_AUTHOR_MODAL: {
            let author;
            let newState = _.cloneDeep(state);
            _.mergeWith(newState, {
                id: action.id,
                modalType: action.modalType
            }, mergeWithCustomizer);
            if (action.id) {
                author = newState.authors.find(function (author) {
                    return author.id == action.id
                });
                newState.author = author;
            }
            return newState;
        } break;
        case HIDE_AUTHOR_MODAL: {
            let newState = _.cloneDeep(state);
            _.mergeWith(newState, {
                author: null,
                id: null,
                modalType: null
            }, mergeWithCustomizer);
            return newState;
        } break;
        case SHOW_BOOK_MODAL: {
            let newState = _.cloneDeep(state);
            _.mergeWith(newState, {
                book: null,
                authorId: action.authorId,
                modalType: action.modalType
            }, mergeWithCustomizer);
            if (action.bookId) {
                let author = newState.authors.find(function(author) {
                    return author.id == action.authorId;
                });
                newState.book = author.books.find(function(book) {
                    return book.id == action.bookId;
                });
            }
            return newState;
        } break;
        case HIDE_BOOK_MODAL: {
            let newState = _.cloneDeep(state);
            _.mergeWith(newState, {
                book: null,
                modalType: null
                //authorId: null
            }, mergeWithCustomizer);
            return newState;
        } break;
        case SHOW_BOOKS: {
            let newState = _.cloneDeep(state);
            _.mergeWith(newState, {
                author: null,
                authorId: action.authorId
            }, mergeWithCustomizer);
            newState.author = newState.authors.find(function(author) {
                return author.id == action.authorId
            });
            return newState;
        } break;
        case CREATE_BOOK: {
            let newState = _.cloneDeep(state);
            _.mergeWith(newState, {
                authorId: action.authorId
            }, mergeWithCustomizer);
            let author = newState.authors.find(function(author) {
                return author.id == action.authorId;
            });
            action.newBook.publishingDate = new Date(action.newBook.publishingDate);
            author.books.push(action.newBook);
            return newState;
        } break;
        case UPDATE_BOOK: {
            let newState = _.cloneDeep(state);
            _.mergeWith(newState, {
                book: null
                //authorId: null
            }, mergeWithCustomizer);
            let author = newState.authors.find(function(author) {
                return author.id == action.authorId;
            });
            author.books = author.books.map(function(book) {
                return book.id == action.updatedBook.id ? action.updatedBook : book;
            });
            return newState;
        } break;
        case DELETE_BOOK: {
            let newState = _.cloneDeep(state);
            _.mergeWith(newState, {
                book: null
                //authorId: null
            }, mergeWithCustomizer);
            let author = newState.authors.find(function(author) {
                return author.id == action.authorId;
            });
            let book = author.books.find(function(book) {
                return book.id == action.bookId;
            });
            let index = author.books.indexOf(book);
            author.books.splice(index, 1);
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
        case SHOW_AUTHOR_MODAL:
            console.log('reducer SHOW_AUTHOR_MODAL', action, state);
            let author;
            if (action.id) {
                author = state.authors.find(function(author) {
                    return author.id == action.id
                });
            }
            return Object.assign({}, state, {
                //modalType: action.modalType,
                author: author,
                id: action.id
            });
            break;
        case HIDE_AUTHOR_MODAL:
            return Object.assign({}, state, {
                //modalType: action.modalType,
                author: null,
                id: null
            });
            break;
        default:
            return state
    }
}

export { authors/*, modal*/ }
