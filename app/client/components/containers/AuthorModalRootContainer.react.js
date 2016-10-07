import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import EditAuthorModal from './../EditAuthorModal.react.js'
import CreateAuthorModal from './../CreateAuthorModal.react.js'
import { updateAuthor } from '../../actions/update-author'
import { createAuthor } from '../../actions/create-author'
import { hideAuthorModal } from '../../actions/hide-author-modal'


class AuthorModalRoot extends React.Component {
    render() {
        if (!this.props.modalType) {
            return null
        }
        switch (this.props.modalType) {
            case 'EDIT_AUTHOR': {
                return <EditAuthorModal author={this.props.author} hideAuthorModal={this.props.hideAuthorModal} updateAuthor={this.props.updateAuthor}/>;
            } break;
            case 'CREATE_AUTHOR': {
                return <CreateAuthorModal hideAuthorModal={this.props.hideAuthorModal} createAuthor={this.props.createAuthor}/>;
            } break;
        }
    }
}


function mapStateToProps(state) {
    return {
        modalType: state.authors.modalType,
        author: state.authors.author
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({createAuthor, updateAuthor, hideAuthorModal}, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthorModalRoot)