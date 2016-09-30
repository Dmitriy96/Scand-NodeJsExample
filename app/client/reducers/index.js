import { combineReducers } from 'redux'
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


function authors(state = {
    updatedAuthor: null,
    newAuthor: null,
    author: null,
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
        case SHOW_AUTHOR_MODAL: {
            let author;
            let newState = Object.assign({}, state, {
                id: action.id
            });
            if (action.id) {
                author = newState.authors.find(function (author) {
                    return author.id == action.id
                });
                newState.author = author;
            }
            return newState;
        } break;
        case HIDE_AUTHOR_MODAL: {
            return Object.assign({}, state, {
                author: null,
                id: null
            });
        } break;
        case SHOW_BOOK_MODAL: {
            console.log('reducer SHOW_BOOK_MODAL', action, state);
            let newState = Object.assign({}, state, {
                book: null,
                authorId: action.authorId
            });
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
            return Object.assign({}, state, {
                book: null
                //authorId: null
            });
        } break;
        case SHOW_BOOKS: {
            console.log('reducer SHOW_BOOKS', action, state);
            let newState = Object.assign({}, state, {
                author: null,
                authorId: action.authorId
            });
            newState.author = newState.authors.find(function(author) {
                return author.id == action.authorId
            });
            return newState;
        } break;
        case CREATE_BOOK: {
            console.log('reducer CREATE_BOOK', action, state);
            let newState = Object.assign({}, state, {
                newBook: null,
                authorId: action.authorId
            });
            let author = newState.authors.find(function(author) {
                return author.id == action.authorId;
            });
            author.books.push(action.newBook);
            return newState;
        } break;
        case UPDATE_BOOK: {
            console.log('reducer UPDATE_BOOK', action, state);
            let newState = Object.assign({}, state, {
                //updatedBook: null,
                //book: null,
                authorId: null
            });
            let author = newState.authors.find(function(author) {
                return author.id == action.authorId;
            });
            console.log('reducer UPDATE_BOOK 2', author);
            author.books = author.books.map(function(book) {
                return book.id == action.updatedBook.id ? action.updatedBook : book;
            });
            console.log('reducer UPDATE_BOOK 3', author);
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
