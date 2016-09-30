import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AuthorRowContainer from './AuthorRowContainer.react.js'
import { showAuthorModal } from '../../actions/show-author-modal'

class ControlPanel extends React.Component {

    onCreateButtonClick = () => {
        this.props.showAuthorModal(
            'CREATE_AUTHOR'
        )
    };

    render() {
        return (
            <div>
                <button type="button" className="btn btn-success" onClick={this.onCreateButtonClick}>Create</button>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({showAuthorModal}, dispatch)
}

export default connect(
    null,
    mapDispatchToProps
)(ControlPanel)