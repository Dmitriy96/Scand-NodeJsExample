import React from 'react';
import { Modal } from 'react-bootstrap';
import BookElement from './BookElement.react.js'

export default class EditAuthorModal extends React.Component {

    state = {
        name: '',
        surname: '',
        bookTitle: ''
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

    onBookTitleChange = (event) => {
        this.setState({
            bookTitle: event.target.value
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
                            <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange}/>
                        </div>
                        <div className="form-group">
                            <label>Surname: </label>
                            <input type="text" className="form-control" value={this.state.surname} onChange={this.onSurnameChange}/>
                        </div>
                        <div className="form-group">
                            <label>Book title: </label>
                            <input type="text" className="form-control" value={this.state.bookTitle} onChange={this.onBookTitleChange}/>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="btn-group">
                        <button className="btn btn-success" onClick={() => {
                                this.props.createAuthor(
                                {
                                    name: this.state.name,
                                    surname: this.state.surname,
                                    books: [{title: this.state.bookTitle, publishingDate: new Date()}]
                                });
                                this.props.hideModal();
                            }
                        }>
                            Create
                        </button>
                        <button className="btn btn-default" onClick={this.props.hideModal}>
                            Cancel
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
        );
    }
}