import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AuthorRow from '../AuthorRow.react'
import { showAuthorModal } from '../../actions/show-author-modal'
import { deleteAuthor } from '../../actions/delete-author'
import { showBooks } from '../../actions/show-books'


class AuthorRowContainer extends React.Component {

    render() {
        console.log('AuthorRowContainer render', this.props, this.state);
        return (
            <AuthorRow author={this.props.author} showAuthorModal={this.props.showAuthorModal} deleteAuthor={this.props.deleteAuthor} showBooks={this.props.showBooks}/>
        );
    }
}

function mapStateToProps(state) {
    console.log('AuthorRowContainer mapStateToProps', state);
    return {
        authors: state.authors.authors  // TODO remove
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({showAuthorModal, deleteAuthor, showBooks}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorRowContainer);
