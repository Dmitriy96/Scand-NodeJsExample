import React from 'react'
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../reducers/index'
import FilterableAuthorTableContainer from './containers/FilterableAuthorTableContainer.react'

const store = createStore(reducers);

function main(rootElement, params) {
    ReactDOM.render(
        <Provider store={store}>
            <FilterableAuthorTableContainer url={params.url} />
        </Provider>,
        //document.getElementById('container')
        rootElement
    );
}

module.exports = main;