import React from 'react'
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { authors } from '../reducers/'
import FilterableAuthorTableContainer from './containers/FilterableAuthorTableContainer.react'
import BookTableContainer from './containers/BookTableContainer.react'
import CreateAuthorModalContainer from './containers/modal/CreateAuthorModalContainer.react.js'
import EditAuthorModalContainer from './containers/modal/EditAuthorModalContainer.react.js'
import CreateBookModalContainer from './containers/modal/CreateBookModalContainer.react'
import EditBookModalContainer from './containers/modal/EditBookModalContainer.react'
import SearchBar from './SearchBar.react'
import App from './App.react'
import { createAuthorRequest } from '../middleware/create-author-request'
import { receiveAuthorsRequest } from '../middleware/receive-authors-request'
import { updateAuthorRequest } from '../middleware/update-author-request'
import { deleteAuthorRequest } from '../middleware/delete-author-request'
import { showModal } from '../middleware/show-modal'
import { hideModal } from '../middleware/hide-modal'
import { showBooks } from '../middleware/show-books'
import { createBookRequest } from '../middleware/create-book-request'
import { updateBookRequest } from '../middleware/update-book-request'
import { deleteBookRequest } from '../middleware/delete-book-request'


const store = createStore(
    combineReducers({
        authors,
        //modal,
        routing: routerReducer
    }),
    {},
    applyMiddleware(
        receiveAuthorsRequest,
        deleteAuthorRequest,
        updateAuthorRequest,
        createAuthorRequest,
        showModal,
        hideModal,
        showBooks,
        createBookRequest,
        updateBookRequest,
        deleteBookRequest,
        routerMiddleware(
            hashHistory
        )
    )
);
const history = syncHistoryWithStore(hashHistory, store);


store.dispatch(push('authors'));

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/authors" component={App}>
                <IndexRoute component={FilterableAuthorTableContainer}/>
                <Route path="/authors/:authorId/edit" component={EditAuthorModalContainer}/>
                <Route path="/authors/create" component={CreateAuthorModalContainer}/>
                <Route path="/authors/:authorId/books" component={BookTableContainer}/>
                <Route path="/authors/:authorId/books/:bookId/edit" component={EditBookModalContainer}/>
                <Route path="/authors/:authorId/books/create" component={CreateBookModalContainer}/>
                <Redirect path="*" to="/authors" />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('container')
);


//function main(rootElement, params) {
//    ReactDOM.render(
//        <Provider store={store}>
//            <FilterableAuthorTableContainer url={params.url} />
//        </Provider>,
//        //rootElement
//    );
//}

//module.exports = main;