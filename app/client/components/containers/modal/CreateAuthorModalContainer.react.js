import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Modal } from 'react-bootstrap';
import BookElement from './../../BookElement.react.js'
import { createAuthor } from '../../../actions/create-author'
import { hideAuthorModal } from '../../../actions/hide-author-modal'

class CreateAuthorModal extends React.Component {

    state = {
        name: '',
        surname: '',
        bookTitle: ''
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

    onBookTitleChange = (event) => {
        this.setState({
            bookTitle: event.target.value
        });
    };

    render() {
        console.log("CreateAuthorModal render", this.context.baseUrl);
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
                                this.context.baseUrl,
                                {
                                    name: this.state.name,
                                    surname: this.state.surname,
                                    books: [{name: this.state.bookTitle, publishingDate: new Date()}]
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

function mapStateToProps(state, ownProps) {
    console.log('CreateAuthorModal mapStateToProps', state, ownProps);
    return {
        //modalType: state.modal.modalType,
        id: state.authors.id    // remove
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({createAuthor, hideAuthorModal}, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateAuthorModal)