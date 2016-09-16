import React from 'react';
import AuthorTable from './AuthorTable.react.js'
import SearchBar from './SearchBar.react.js'

export default class FilterableAuthorTable extends React.Component {

    static propTypes = {
        authors: React.PropTypes.any.isRequired
    };

    static childContextTypes = {
        buttonStyle: React.PropTypes.string
    };

    getChildContext() {
        return {buttonStyle: "success"};
    }

    render() {
        let authors = this.props.authors;
        return (
            <div>
                <SearchBar />
                <AuthorTable {...authors} />
            </div>
        );
    }
}