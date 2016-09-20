import React from 'react';
import BookElement from './BookElement.react.js'

export default class EditAuthorModal extends React.Component {

    static propTypes = {
        author: React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            surname: React.PropTypes.string.isRequired,
            books: React.PropTypes.any.isRequired
        })
    };

    state = {
        name: this.props.author.name,
        surname: this.props.author.surname,
        books: this.props.author.books
    };

    onNameChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    onSurnameChange(event) {
        this.setState({
            surname: event.target.value
        });
    }

    render() {
        console.log('EditAuthorModal render', this.props, this.state);
        let booksList = [];
        this.state.books.map((book) => {
            booksList.push(<option value={book.title} key={book.title}>{book.title}</option>)
        });
        return (
            <div>
                <label>Name: </label>
                <input type="text" value={this.state.name} onChange={this.onNameChange.bind(this)}/>
                <label>Surname: </label>
                <input type="text" value={this.state.surname} onChange={this.onSurnameChange.bind(this)}/>
                <label>Books: </label>
                <select>
                    {booksList}
                </select>
                <button onClick={() => {
                        this.props.updateAuthor(
                        this.props.author.surname,
                        {
                            name: this.state.name,
                            surname: this.state.surname,
                            books: this.state.books
                        });
                        this.props.hideModal();
                    }
                }>
                    Update
                </button>
                <button onClick={this.props.hideModal}>
                    Cancel
                </button>
            </div>
        );
    }
}