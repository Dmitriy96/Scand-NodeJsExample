import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import request from 'superagent';
import BookTable from '../BookTable.react'
import BooksControlPanel from '../BooksControlPanel.react'
import { showBookModal } from '../../actions/show-book-modal'

class BookTableContainer extends React.Component {

    render() {
        console.log('BookTableContainer render', this.props, this.state);
        return (
            <div>
                <BooksControlPanel showBookModal={this.props.showBookModal} authorId={this.props.author.id}/>
                <BookTable author={this.props.author}/>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    console.log('BookTableContainer mapStateToProps', state, ownProps);
    return {
        author: state.authors.author
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ showBookModal }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookTableContainer);
