import React from 'react';

export default class BookRow extends React.Component {

    //static propTypes = {
    //    book: React.PropTypes.shape({
    //        name: React.PropTypes.string.isRequired
    //    })
    //};

    onEditButtonClick = () => {
        this.props.showBookModal(
            'EDIT_BOOK',
            this.props.authorId,
            this.props.book.id
        )
    };

    onDeleteButtonClick = () => {
        console.log('onDeleteButtonClick', this.props.book.id, this.props.authorId);
        this.props.showConfirmDeletion(
            this.props.book.id,
            this.props.authorId
        );
    };

    render() {
        let book = this.props.book;
        return (
            <tr>
                <td>{book.name}</td>
                <td>{book.publishingDate.getFullYear()}-{("0" + (book.publishingDate.getMonth() + 1)).slice(-2)}-{("0" + book.publishingDate.getDate()).slice(-2)}</td>
                <td>
                    <div className="btn-group">
                        <button type="button" className="btn btn-warning" onClick={this.onEditButtonClick}>Edit</button>
                        <button type="button" className="btn btn-danger" onClick={this.onDeleteButtonClick}>Delete</button>
                    </div>
                </td>
            </tr>

        )
    }
}