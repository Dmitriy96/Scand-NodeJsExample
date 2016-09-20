import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AuthorRow from '../AuthorRow.react'
import { showModal } from '../../actions/show-modal'
import { hideModal } from '../../actions/hide-modal'
import { updateAuthor } from '../../actions/update-author'


class AuthorRowContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log('AuthorRowContainer render', this.props);
        return (
            <AuthorRow author={this.props.author} updatedAuthor={this.props.updatedAuthor} showModal={this.props.showModal}/>
        );
    }
}

function mapStateToProps(state) {
    console.log('AuthorRowContainer mapStateToProps', state);
    let props = state.authors;
    return {...state.authors};
    //    authors: state.authors,
    //    surname: state.modal.surname,
    //    updatedAuthor: state.author.updatedAuthor
    //}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({showModal, hideModal, updateAuthor }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorRowContainer);
