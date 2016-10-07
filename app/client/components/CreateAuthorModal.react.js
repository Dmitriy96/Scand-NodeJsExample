import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Modal } from 'react-bootstrap';
import BookElement from './BookElement.react.js'
import { createAuthor } from '../actions/create-author'
import { hideAuthorModal } from '../actions/hide-author-modal'

export default class CreateAuthorModal extends React.Component {

    state = {
        name: '',
        surname: ''
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
                    <Modal.Title>Author creating</Modal.Title>
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
                                this.props.createAuthor(
                                this.context.baseUrl,
                                {
                                    name: this.state.name,
                                    surname: this.state.surname,
                                    books: []
                                });
                                this.props.hideAuthorModal();
                            }
                        }>
                            Create
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