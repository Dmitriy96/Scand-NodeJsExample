import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AuthorRow from '../AuthorRow.react'
import { showModal } from '../../actions/show-modal'
import { deleteAuthorRequest } from '../../actions/delete-author-request'


class AuthorRowContainer extends React.Component {

    render() {
        return (
            <AuthorRow author={this.props.author} showModal={this.props.showModal} deleteAuthor={this.props.deleteAuthorRequest}/>
        );
    }
}

function mapStateToProps(state) {
    return {...state.authors};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({showModal, deleteAuthorRequest}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorRowContainer);
