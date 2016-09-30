import React from 'react'
import { Link, hashHistory } from 'react-router'


const baseUrl = 'http://localhost:8080/book-editor/authors';

export default class App extends React.Component {

    static childContextTypes = {
        baseUrl: React.PropTypes.string
    };

    getChildContext() {
        return {baseUrl: baseUrl};
    }

    render () {
        return (
            <div>
                <header>
                    Links:
                    {' '}
                    <Link to="/authors">Home</Link>
                    {' '}
                    <Link to="/authors/1/books">Books</Link>
                </header>
                <div>
                    <button onClick={() => hashHistory.push('authors/1/books')}>Books</button>
                </div>
                <div>{this.props.children}</div>
            </div>
        )
    }
}