import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Modal } from 'react-bootstrap';
import BookElement from './../../BookElement.react.js'
import { createBook } from '../../../actions/create-book'
import { hideBookModal } from '../../../actions/hide-book-modal'

class CreateBookModal extends React.Component {

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
        console.log("CreateBookModal render", this.props, this.state, this.context.baseUrl);
        return (
            <Modal show={true}>
                <Modal.Header>
                    <Modal.Title>Book creating</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className="form-group">
                            <label>Title: </label>
                            <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange}/>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="btn-group">
                        <button className="btn btn-success" onClick={() => {
                                this.props.createBook(
                                this.context.baseUrl,
                                this.props.authorId,
                                {
                                    name: this.state.name,
                                    publishingDate: new Date()
                                });
                                this.props.hideBookModal();
                            }
                        }>
                            Create
                        </button>
                        <button className="btn btn-default" onClick={this.props.hideBookModal}>
                            Cancel
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
        );
    }
}

function mapStateToProps(state, ownProps) {
    console.log('CreateBookModal mapStateToProps', state, ownProps);
    return {
        //modalType: state.modal.modalType,
        authorId: state.authors.authorId
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({createBook, hideBookModal}, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateBookModal)