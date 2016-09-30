import React from 'react';
import AuthorTable from './AuthorTable.react'
import SearchBar from './SearchBar.react'
import ControlPanel from './containers/AuthorsControlPanelContainer.react.js'

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
        console.log('FilterableAuthorTable render', this.props, this.state);
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
                    <AuthorTable authors={authors} />      {/*change to {...authors}*/}
                </div>
            </div>
        );
    }
}