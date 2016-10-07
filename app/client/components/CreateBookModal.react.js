import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Modal } from 'react-bootstrap';
import '../../../node_modules/react-date-picker/index.css'
import { DateField, Calendar } from 'react-date-picker'
import { createBook } from '../actions/create-book'
import { hideBookModal } from '../actions/hide-book-modal'

export default class CreateBookModal extends React.Component {

    state = {
        name: '',
        publishingDate: '2000-01-01'
    };

    static contextTypes = {
        baseUrl: React.PropTypes.string
    };

    onNameChange = (event) => {
        this.setState({
            name: event.target.value
        });
    };

    onDateChange = (date) => {
        console.log('CreateBookModal onDateChange', date);
        this.setState({
            publishingDate: date
        });
    };

    render() {
        return (
            <Modal show={true}>
                <Modal.Header>
                    <Modal.Title>Book creating</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className="form-group">
                            <label>Title: </label>
                            <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange} required/>
                        </div>
                        <div className="form-group">
                            <label>DateFieled: </label>
                            <DateField
                                className="form-control"
                                maxDate={new Date()}
                                defaultValue={this.state.publishingDate}
                                selected={this.state.publishingDate}
                                onChange={this.onDateChange}
                                dateFormat="YYYY-MM-DD"
                                required="true"
                                forceValidDate
                            />
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
                                    publishingDate: new Date(this.state.publishingDate)
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