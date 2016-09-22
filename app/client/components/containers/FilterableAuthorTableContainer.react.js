import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import request from 'superagent';
import FilterableAuthorTable from '../FilterableAuthorTable.react.js'
import ModalRootContainer from './ModalRootContainer.react'
import * as receiveAuthors from '../../actions/receive-authors'
import classNames from 'classnames/bind';
import styles from './styles.css'

let cx = classNames.bind(styles);


class FilterableAuthorTableContainer extends React.Component {

    static childContextTypes = {
        url: React.PropTypes.string
    };

    getChildContext() {
        return {url: this.props.url};
    }

    componentDidMount() {
        request
            //.get('/authors')
            .get(this.props.url)
            .end((err, res) => {
                console.log('response result', res);
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
        let className = cx({
            element: true
        });
        let authors = this.props.authors;
        return (
            <div>
                <FilterableAuthorTable authors={this.props.authors}/>
                <ModalRootContainer {...authors} />
                <div ></div>
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
