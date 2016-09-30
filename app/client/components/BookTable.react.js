import React from 'react';
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


    render() {
        console.log('BookTable render', this.props, this.state);
        var rows = [];
        this.props.author.books.forEach((book) => {
            console.log('BookTable render book', book);
            rows.push(<BookRowContainer book={book} authorId={this.props.author.id} key={book.id} />);
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
            </div>
        );
    }
}