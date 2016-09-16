import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import request from 'superagent';
import FilterableAuthorTable from '../FilterableAuthorTable.react.js'
import * as actions from '../../actions/receive-authors'


class FilterableAuthorTableContainer extends React.Component {

    componentDidMount() {
        request
            .get('/json')
            .end((err, res) =>{
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
        return (
            <FilterableAuthorTable authors={this.props.authors} />
        );
    }
}

function mapStateToProps(state) {
    return {
        authors: state.authors
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterableAuthorTableContainer);
