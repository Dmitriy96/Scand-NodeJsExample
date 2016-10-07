import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AuthorRow from '../AuthorRow.react'
import { showAuthorModal } from '../../actions/show-author-modal'
import { showBooks } from '../../actions/show-books'


class AuthorRowContainer extends React.Component {

    render() {
        return (
            <AuthorRow author={this.props.author} showAuthorModal={() => {this.props.showAuthorModal(this.props.author.id)}} showBooks={this.props.showBooks} showConfirmDeletion={this.props.showConfirmDeletion}/>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({showAuthorModal, showBooks}, dispatch);
}

export default connect(null, mapDispatchToProps)(AuthorRowContainer);
