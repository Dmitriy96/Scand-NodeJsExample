import React from 'react';

export default class BookRow extends React.Component {

    //static propTypes = {
    //    book: React.PropTypes.shape({
    //        name: React.PropTypes.string.isRequired
    //    })
    //};

    static contextTypes = {
        baseUrl: React.PropTypes.string
    };

    onEditButtonClick = () => {
        this.props.showBookModal(
            'EDIT_BOOK',
            this.props.authorId,
            this.props.book.id
        )
    };

    onDeleteButtonClick = () => {
        this.props.deleteBook(
            this.props.book.id,
            this.props.authorId,
            this.context.baseUrl
        )
    };

    render() {
        console.log('BookRow render', this.props, this.state);
        let book = this.props.book;
        return (
            <tr>
                <td>{book.name}</td>
                <td>{book.publishingDate}</td>
                <td>
                    <button type="button" className="btn btn-warning" onClick={this.onEditButtonClick}>Edit</button>
                    <button type="button" className="btn btn-danger" onClick={this.onDeleteButtonClick}>Delete</button>
                </td>
            </tr>
        )
    }
}