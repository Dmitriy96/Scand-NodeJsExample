import React from 'react';
import BookElement from './BookElement.react.js'
import { showModal } from '../actions/show-modal'

export default class AuthorRow extends React.Component {

    static propTypes = {
        author: React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            surname: React.PropTypes.string.isRequired,
            books: React.PropTypes.any.isRequired
        })
    };

    static contextTypes = {
        buttonStyle: React.PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    onIncrementButtonClick() {
        this.setState({
            value: ++this.state.value
        })
    }

    onEditButtonClick() {
        this.props.showModal(
            'EDIT_AUTHOR',
            this.props.author.surname
        )
    }

    render() {
        let btnClass = `btn btn-${this.context.buttonStyle ? this.context.buttonStyle : 'danger'}`;
        let author = this.props.author;
        /*if (this.props.updatedAuthor) {
            author = this.props.updatedAuthor
        }*/
        return (
            <tr>
                <td>{author.name}</td>
                <td>{author.surname}</td>
                <td>
                    {author.books.map(function(book) {
                        return <BookElement book={book} key={book.title}/>
                    })}
                </td>
                <td>
                    <label>{this.state.value}</label>
                    <button type="button" className={btnClass} onClick={this.onIncrementButtonClick.bind(this)}>+</button>
                </td>
                <td>
                    <button type="button" onClick={this.onEditButtonClick.bind(this)}>Edit</button>
                </td>
            </tr>
        );
    }
}