import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import EditAuthorModal from '../EditAuthorModal.react'
import { updateAuthor } from '../../actions/update-author'
import { hideModal } from '../../actions/hide-modal'

const MODAL_COMPONENTS = {
    'EDIT_AUTHOR': EditAuthorModal
};

class ModalRoot extends React.Component {
    render() {
        console.log('ModalRoot', this.props);
        if (!this.props.modalType) {
            return null
        }
        const SpecificModal = MODAL_COMPONENTS[this.props.modalType];
        let author = this.props.authors.find((author) => {
            return author.surname == this.props.surname
        });
        console.log('ModalRoot 2', author, this.props.authors, this.props.author);
        return <SpecificModal author={author} hideModal={this.props.hideModal} updateAuthor={this.props.updateAuthor} />
    }
}


function mapStateToProps(state) {
    console.log('ModalRoot mapStateToProps', state);
    return {
        modalType: state.modal.modalType,
        surname: state.modal.surname
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({updateAuthor, hideModal}, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalRoot)