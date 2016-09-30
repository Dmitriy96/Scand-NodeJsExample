import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Modal } from 'react-bootstrap';
import BookElement from './../../BookElement.react.js'
import { updateBook } from '../../../actions/update-book'
import { hideBookModal } from '../../../actions/hide-book-modal'

class EditBookModal extends React.Component {

    state = {
        name: this.props.book.name
    };

    static contextTypes = {
        baseUrl: React.PropTypes.string
    };

    onNameChange = (event) => {
        this.setState({
            name: event.target.value
        });
    };

    render() {
        console.log("EditBookModal render", this.props, this.state, this.context.baseUrl);
        return (
            <Modal show={true}>
                <Modal.Header>
                    <Modal.Title>Book editing</Modal.Title>
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
                                this.props.updateBook(
                                this.props.authorId,
                                this.context.baseUrl,
                                {
                                    id: this.props.book.id,
                                    name: this.state.name,
                                    publishingDate: this.props.book.publishingDate
                                });
                                this.props.hideBookModal();
                            }
                        }>
                            Update
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
    console.log('EditBookModal mapStateToProps', state, ownProps);
    return {
        book: state.authors.book,
        authorId: state.authors.authorId
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({updateBook, hideBookModal}, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditBookModal)