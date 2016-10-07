import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Modal } from 'react-bootstrap';
import BookElement from './BookElement.react.js'
import { updateAuthor } from '../actions/update-author'
import { hideAuthorModal } from '../actions/hide-author-modal'

export default class EditAuthorModal extends React.Component {

    state = {
        name: this.props.author.name,
        surname: this.props.author.surname
    };

    static contextTypes = {
        baseUrl: React.PropTypes.string
    };

    onNameChange = (event) => {
        this.setState({
            name: event.target.value
        });
    };

    onSurnameChange = (event) => {
        this.setState({
            surname: event.target.value
        });
    };

    render() {
        return (
            <Modal show={true}>
                <Modal.Header>
                    <Modal.Title>Author editing</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className="form-group">
                            <label>Name: </label>
                            <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange} required/>
                        </div>
                        <div className="form-group">
                            <label>Surname: </label>
                            <input type="text" className="form-control" value={this.state.surname} onChange={this.onSurnameChange} required/>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="btn-group">
                        <button className="btn btn-success" onClick={() => {
                                this.props.updateAuthor(
                                this.props.author.id,
                                this.context.baseUrl,
                                {
                                    id: this.props.author.id,
                                    name: this.state.name,
                                    surname: this.state.surname
                                    //books: this.state.books
                                });
                                this.props.hideAuthorModal();
                            }
                        }>
                            Update
                        </button>
                        <button className="btn btn-default" onClick={this.props.hideAuthorModal}>
                            Cancel
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
        );
    }
}