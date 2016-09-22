import React from 'react';
import AuthorTable from './AuthorTable.react'
import SearchBar from './SearchBar.react'
import ControlPanel from './containers/ControlPanelContainer.react'

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
                <div className="form-group">
                    <SearchBar />
                </div>
                <div className="form-group">
                    <ControlPanel />
                </div>
                <div className="form-group">
                    <AuthorTable {...authors} />
                </div>
            </div>
        );
    }
}