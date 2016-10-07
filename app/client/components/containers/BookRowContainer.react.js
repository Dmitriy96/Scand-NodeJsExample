import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import BookRow from '../BookRow.react.js'
import { showBookModal } from '../../actions/show-book-modal'
import { deleteBook } from '../../actions/delete-book'


class BookRowContainer extends React.Component {

    render() {
        return (
            <BookRow showConfirmDeletion={this.props.showConfirmDeletion} book={this.props.book} authorId={this.props.authorId} showBookModal={this.props.showBookModal} deleteBook={this.props.deleteBook}/>
        );
    }
}

function mapStateToProps(state) {
    return {
        authorId: state.authors.authorId
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({showBookModal, deleteBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookRowContainer);
