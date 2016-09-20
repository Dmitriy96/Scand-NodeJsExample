import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import request from 'superagent';
import FilterableAuthorTable from '../FilterableAuthorTable.react.js'
import ModalRootContainer from './ModalRootContainer.react'
import * as receiveAuthors from '../../actions/receive-authors'


class FilterableAuthorTableContainer extends React.Component {

    componentDidMount() {
        request
            .get('/json')
            .end((err, res) => {
                let authors;
                if (err || !res.ok) {
                    authors = []
                } else {
                    authors = res.body
                }
                this.props.receiveAuthors(authors);
            });
    }

    render() {
        let authors = this.props.authors;
        return (
            <div>
                <FilterableAuthorTable authors={this.props.authors}/>
                <ModalRootContainer {...authors} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        authors: state.authors
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(receiveAuthors, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterableAuthorTableContainer);
