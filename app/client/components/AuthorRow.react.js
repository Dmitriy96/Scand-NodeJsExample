import React from 'react';
import BookElement from './BookElement.react.js'
import { showModal } from '../actions/show-modal'
import classnames from 'classnames';

export default class AuthorRow extends React.Component {

    static propTypes = {
        author: React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            surname: React.PropTypes.string.isRequired,
            books: React.PropTypes.any.isRequired
        })
    };

    static contextTypes = {
        buttonStyle: React.PropTypes.string,
        url: React.PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    onIncrementButtonClick = () => {
        this.setState({
            value: ++this.state.value
        })
    };

    onEditButtonClick = () => {
        this.props.showModal(
            'EDIT_AUTHOR',
            this.props.author.id
        )
    };

    onDeleteButtonClick = () => {
        this.props.deleteAuthor(
            this.props.author.id,
            this.context.url
        )
    };

    render() {
        let btnClass = `btn btn-${this.context.buttonStyle ? this.context.buttonStyle : 'danger'}`;
        let author = this.props.author;
        return (
            <tr>
                <td>{author.name}</td>
                <td>{author.surname}</td>
                <td>
                    {author.books.map(function(book, index) {
                        return <BookElement book={book} key={index}/>
                    })}
                </td>
                <td>
                    <label>{this.state.value}</label>
                    <button type="button" className={btnClass} onClick={this.onIncrementButtonClick}>+</button>
                </td>
                <td>
                    <button type="button" className="btn btn-warning" onClick={this.onEditButtonClick}>Edit</button>
                    <button type="button" className="btn btn-danger" onClick={this.onDeleteButtonClick}>Delete</button>
                </td>
            </tr>
        );
    }
}