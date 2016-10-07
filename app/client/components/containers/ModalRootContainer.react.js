import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import EditAuthorModal from '../EditAuthorModal.react'
import { updateAuthor } from '../../actions/update-author'
import { hideModal } from '../../actions/hide-modal'


class ModalRoot extends React.Component {
    render() {
        if (!this.props.modalType) {
            return null
        }
        switch (this.props.modalType) {
            case 'EDIT_AUTHOR':
                let author = this.props.authors.find((author) => {
                    return author.id == this.props.id
                });
                return <EditAuthorModal author={author} hideModal={this.props.hideModal} updateAuthor={this.props.updateAuthor} />;
                break;
            case 'CREATE_AUTHOR':
                break;
        }
    }
}

function mapStateToProps(state) {
    return {
        modalType: state.authors.modalType
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({updateAuthor, hideModal}, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalRoot)