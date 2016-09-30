import React from 'react';

export default class ControlPanel extends React.Component {

    onCreateButtonClick = () => {
        this.props.showBookModal(
            'CREATE_BOOK',
            this.props.authorId
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