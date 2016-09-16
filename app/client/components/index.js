import React from 'react'
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../reducers/index'
import FilterableAuthorTableContainer from './containers/FilterableAuthorTableContainer.react'

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <FilterableAuthorTableContainer />
    </Provider>,
    document.getElementById('container')
);

