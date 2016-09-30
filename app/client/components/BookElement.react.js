import React from 'react';

export default class BookElement extends React.Component {

    static propTypes = {
        book: React.PropTypes.shape({
            name: React.PropTypes.string.isRequired
        })
    };

    render() {
        return <span>{this.props.book.name}<br/></span>;
    }
}