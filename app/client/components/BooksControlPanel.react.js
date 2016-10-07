import React from 'react';

export default class BooksControlPanel extends React.Component {

    onCreateButtonClick = () => {
        this.props.showBookModal(
            'CREATE_BOOK',
            this.props.authorId
        )
    };

    onAuthorsListButtonClick = () => {
        this.props.showAuthors()
    };

    render() {
        return (
            <div className="page-header">
                <div className="btn-group">
                    <button type="button" className="btn btn-success" onClick={this.onCreateButtonClick}>Create</button>
                    <button type="button" className="btn btn-info" onClick={this.onAuthorsListButtonClick}>Authors List</button>
                </div>
            </div>
        );
    }
}