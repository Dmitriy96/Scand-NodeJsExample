import React from 'react';
import BookElement from './BookElement.react.js'

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

    onClick() {
        this.setState({
            value: ++this.state.value
        })
    }

    render() {
        let btnClass = `btn btn-${this.context.buttonStyle ? this.context.buttonStyle : 'danger'}`;
        return (
            <tr>
                <td>{this.props.author.name}</td>
                <td>{this.props.author.surname}</td>
                <td>
                    {this.props.author.books.map(function(book) {
                        return <BookElement book={book} key={book.title}/>
                    })}
                </td>
                <td>
                    <label>{this.state.value}</label>
                    <button type="button" className={btnClass} onClick={this.onClick.bind(this)}>+</button>
                </td>
            </tr>
        );
    }
}