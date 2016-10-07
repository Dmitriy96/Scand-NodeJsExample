import React from 'react'
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, IndexRedirect, Redirect, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { authors } from '../reducers/'
import FilterableAuthorTableContainer from './containers/FilterableAuthorTableContainer.react'
import BookTableContainer from './containers/BookTableContainer.react'
import CreateAuthorModalContainer from './CreateAuthorModal.react.js'
import EditAuthorModalContainer from './EditAuthorModal.react.js'
import CreateBookModalContainer from './CreateBookModal.react.js'
import EditBookModalContainer from './EditBookModal.react.js'
import SearchBar from './SearchBar.react'
import App from './App.react'
import { createAuthorRequest } from '../middleware/create-author-request'
import { receiveAuthorsRequest } from '../middleware/receive-authors-request'
import { updateAuthorRequest } from '../middleware/update-author-request'
import { deleteAuthorRequest } from '../middleware/delete-author-request'
import { showModal } from '../middleware/show-modal'
import { hideModal } from '../middleware/hide-modal'
import { showBooks } from '../middleware/show-books'
import { showAuthors } from '../middleware/show-authors'
import { createBookRequest } from '../middleware/create-book-request'
import { updateBookRequest } from '../middleware/update-book-request'
import { deleteBookRequest } from '../middleware/delete-book-request'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        authors,
        routing: routerReducer
    }),
    {},
    composeEnhancers(
        applyMiddleware(
            receiveAuthorsRequest,
            deleteAuthorRequest,
            updateAuthorRequest,
            createAuthorRequest,
            showBooks,
            showAuthors,
            createBookRequest,
            updateBookRequest,
            deleteBookRequest,
            routerMiddleware(
                hashHistory
            )
        )
    )
);
const history = syncHistoryWithStore(hashHistory, store);


store.dispatch(push('authors'));

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRedirect to="/authors"/>
                <Route path="authors" component={FilterableAuthorTableContainer}/>
                <Route path="authors/:authorId/books" component={BookTableContainer}/>
                <Redirect path="*" to="/authors"/>
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