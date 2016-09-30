import React from 'react';
import AuthorRowContainer from './containers/AuthorRowContainer.react'

export default class AuthorTable extends React.Component {

    static propTypes = {
        authors: React.PropTypes.arrayOf(React.PropTypes.shape(
            {
                surname: React.PropTypes.string.isRequired
            }
        )).isRequired
    };


    render() {
        console.log('AuthorTable render', this.props, this.state);
        var rows = [];
        this.props.authors.forEach((author) => {
            rows.push(<AuthorRowContainer author={author} key={author.id} />);
        });
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Books</th>
                    <th>Quantity</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}