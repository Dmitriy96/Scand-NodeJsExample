import React from 'react';
import { Modal } from 'react-bootstrap';
import BookRowContainer from './containers/BookRowContainer.react'

export default class BookTable extends React.Component {

    static propTypes = {
        author: React.PropTypes.shape(
            {
                id: React.PropTypes.number.isRequired,
                name: React.PropTypes.string.isRequired,
                surname: React.PropTypes.string.isRequired,
                books: React.PropTypes.array.isRequired
            }
        ).isRequired
    };

    static contextTypes = {
        baseUrl: React.PropTypes.string
    };

    state = {
        showConfirmDeletingDialog: false,
        deletionAttributes: {}
    };

    onDeleteButtonClick = (bookId, authorId) => {
        this.setState({
            showConfirmDeletingDialog: true,
            deletionAttributes: {
                bookId,
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
        this.props.deleteBook(
            this.state.deletionAttributes.bookId,
            this.state.deletionAttributes.authorId,
            this.context.baseUrl
        )
    };

    render() {
        console.log('BookTable render', this.props, this.state);
        var rows = [];
        this.props.author.books.forEach((book) => {
            console.log('BookTable render book', book);
            rows.push(<BookRowContainer showConfirmDeletion={this.onDeleteButtonClick} hideConfirmDeletion={this.onCancelDeletionButtonClick} book={book} authorId={this.props.author.id} key={book.id} />);
        });
        return (
            <div>
                <h2>Books of {this.props.author.name} {this.props.author.surname}</h2>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Publishing date</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
                {this.state.showConfirmDeletingDialog &&
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title>Confirm deletion</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Delete this book?
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