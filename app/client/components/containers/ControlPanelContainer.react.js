import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AuthorRowContainer from './AuthorRowContainer.react.js'
import { showModal } from '../../actions/show-modal'

class ControlPanel extends React.Component {

    onCreateButtonClick = () => {
        this.props.showModal(
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
    return bindActionCreators({showModal}, dispatch)
}

export default connect(
    null,
    mapDispatchToProps
)(ControlPanel)