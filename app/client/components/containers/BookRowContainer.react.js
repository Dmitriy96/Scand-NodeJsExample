import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import BookRow from '../BookRow.react.js'
import { showBookModal } from '../../actions/show-book-modal'
import { deleteBook } from '../../actions/delete-book'


class BookRowContainer extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        console.log('BookRowContainer shouldComponentUpdate', nextProps, nextState, this.props, this.state);
        return nextProps.book.name !== this.props.book.name;//shallowCompare(this, nextProps, nextState);
    }

    render() {
        console.log('BookRowContainer render', this.props, this.state);
        return (
            <BookRow book={this.props.book} authorId={this.props.authorId} showBookModal={this.props.showBookModal} deleteBook={this.props.deleteBook}/>
        );
    }
}

function mapStateToProps(state, ownProps) {
    console.log('BookRowContainer mapStateToProps', state, ownProps);
    return {
        authorId: state.authors.authorId
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({showBookModal, deleteBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookRowContainer);
