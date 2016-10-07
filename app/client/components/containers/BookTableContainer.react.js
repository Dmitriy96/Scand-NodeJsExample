import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import request from 'superagent';
import BookTable from '../BookTable.react'
import BooksControlPanel from '../BooksControlPanel.react'
import BookModalRootContainer from './BookModalRootContainer.react.js'
import { showBookModal } from '../../actions/show-book-modal'
import { showAuthors } from '../../actions/show-authors'
import { deleteBook } from '../../actions/delete-book'

class BookTableContainer extends React.Component {

    render() {
        return (
            <div>
                <BookModalRootContainer author={this.props.author}/>
                <BooksControlPanel showBookModal={this.props.showBookModal} showAuthors={this.props.showAuthors} authorId={this.props.author.id}/>
                <BookTable author={this.props.author} deleteBook={this.props.deleteBook}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        author: state.authors.author
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ showBookModal, showAuthors, deleteBook }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookTableContainer);
