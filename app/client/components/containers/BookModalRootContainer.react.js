import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import EditBookModal from './../EditBookModal.react.js'
import CreateBookModal from './../CreateBookModal.react.js'
import { updateBook } from '../../actions/update-book'
import { createBook } from '../../actions/create-book'
import { hideBookModal } from '../../actions/hide-book-modal'

class BookModalRoot extends React.Component {
    render() {
        console.log('BookModalRoot render', this.props);
        if (!this.props.modalType) {
            return null
        }
        switch (this.props.modalType) {
            case 'EDIT_BOOK': {
                return <EditBookModal authorId={this.props.authorId} book={this.props.book} hideBookModal={this.props.hideBookModal} updateBook={this.props.updateBook}/>;
            } break;
            case 'CREATE_BOOK': {
                return <CreateBookModal authorId={this.props.authorId} hideBookModal={this.props.hideBookModal} createBook={this.props.createBook}/>;
            } break;
        }
    }
}


function mapStateToProps(state) {
    return {
        modalType: state.authors.modalType,
        book: state.authors.book,
        authorId: state.authors.authorId
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({createBook, updateBook, hideBookModal}, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookModalRoot)