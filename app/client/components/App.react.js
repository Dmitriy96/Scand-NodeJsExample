import React from 'react'
import { Link, hashHistory } from 'react-router'


//const baseUrl = 'http://localhost:8080/book-editor/authors';
const baseUrl = 'http://localhost:3000/authors';

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
                {this.props.children}
            </div>
        )
    }
}