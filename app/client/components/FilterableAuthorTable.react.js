import React from 'react';
import { Modal } from 'react-bootstrap';
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

    static contextTypes = {
        baseUrl: React.PropTypes.string
    };

    getChildContext() {
        return {buttonStyle: "success"};
    }

    state = {
        showConfirmDeletingDialog: false,
        deletionAttributes: {},
        authors: this.props.authors
    };

    onDeleteButtonClick = (authorId) => {
        this.setState({
            showConfirmDeletingDialog: true,
            deletionAttributes: {
                authorId
            }
        });
    };

    onCancelDeletionButtonClick = () => {
        this.setState({
            showConfirmDeletingDialog: false
        });
    };

    onConfirmDeletionButtonClick = () => {
        this.setState({
            showConfirmDeletingDialog: false,
            deletionAttributes: {}
        });
        this.props.deleteAuthor(
            this.state.deletionAttributes.authorId,
            this.context.baseUrl
        )
    };

    onSearchChange = (event) => {
        let text = event.target.value.toUpperCase();
        let authors = this.props.authors.filter(function(author) {
            return author.name.toUpperCase().startsWith(text) || author.surname.toUpperCase().startsWith(text) || author.books.find(function(book) {
                return book.name.toUpperCase().startsWith(text)
            })
        });
        this.setState({
            authors
        });
    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            authors: nextProps.authors
        })
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <SearchBar onChange={this.onSearchChange}/>
                </div>
                <div className="form-group">
                    <ControlPanel />
                </div>
                <div className="form-group">
                    <AuthorTable authors={this.state.authors} showConfirmDeletion={this.onDeleteButtonClick} />
                </div>
                {this.state.showConfirmDeletingDialog &&
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Confirm deletion</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Delete this author?
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="btn-group">
                            <button type="button" className="btn btn-danger" onClick={this.onConfirmDeletionButtonClick}>Confirm</button>
                            <button type="button" className="btn btn-default" onClick={this.onCancelDeletionButtonClick}>Cancel</button>
                        </div>
                    </Modal.Footer>
                </Modal.Dialog>
                }
            </div>
        );
    }
}