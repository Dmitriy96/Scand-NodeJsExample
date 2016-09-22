import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import EditAuthorModal from '../EditAuthorModal.react'
import CreateAuthorModal from '../CreateAuthorModal.react'
import { updateAuthor } from '../../actions/update-author'
import { createAuthor } from '../../actions/create-author'
import { hideModal } from '../../actions/hide-modal'

const MODAL_COMPONENTS = {
    'EDIT_AUTHOR': EditAuthorModal,
    'CREATE_AUTHOR': CreateAuthorModal
};

class ModalRoot extends React.Component {
    render() {
        if (!this.props.modalType) {
            return null
        }
        switch (this.props.modalType) {
            case 'EDIT_AUTHOR': {
                const SpecificModal = MODAL_COMPONENTS[this.props.modalType];
                let author = this.props.authors.find((author) => {
                    return author.id == this.props.id
                });
                return <SpecificModal author={author} hideModal={this.props.hideModal} updateAuthor={this.props.updateAuthor}/>;
            } break;
            case 'CREATE_AUTHOR': {
                const SpecificModal = MODAL_COMPONENTS[this.props.modalType];
                return <SpecificModal hideModal={this.props.hideModal} createAuthor={this.props.createAuthor}/>;
            } break;
        }
    }
}


function mapStateToProps(state) {
    return {
        modalType: state.modal.modalType,
        id: state.modal.id
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({createAuthor, updateAuthor, hideModal}, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalRoot)