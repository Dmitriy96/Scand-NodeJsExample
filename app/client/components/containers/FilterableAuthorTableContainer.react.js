import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import request from 'superagent';
import FilterableAuthorTable from '../FilterableAuthorTable.react.js'
import { receiveAuthors } from '../../actions/receive-authors'
import classNames from 'classnames/bind';
import styles from './styles.css'

let cx = classNames.bind(styles);

class FilterableAuthorTableContainer extends React.Component {

    static contextTypes = {
        baseUrl: React.PropTypes.string
    };

    componentDidMount() {
        console.log('FilterableAuthorTableContainer componentDidMount', this.props, this.state, this.context.baseUrl);
        this.props.receiveAuthors(this.context.baseUrl);
        //try {
        //    //console.log('componentDidMount', this.props);
        //    this.request = request
        //    //.get('/authors')
        //    //    .get(this.props.baseUrl)
        //        .get(baseUrl)
        //        .end((err, res) => {
        //            console.log('response result', res);
        //            let authors;
        //            if (err || !res.ok) {
        //                authors = []
        //            } else {
        //                authors = res.body
        //            }
        //            this.props.receiveAuthors(authors);
        //            //this.setState({
        //            //    authors: authors
        //            //})
        //        });
        //} catch (e) {
        //    console.log('componentDidMount error', e);
        //}
    }

    //componentWillUnmount() {
    //    console.log('FilterableAuthorTableContainer componentWillUnmount', this.props, this.state);
    //    this.request.abort();
    //}


    render() {
        console.log('FilterableAuthorTableContainer render', this.props, this.state);
        let className = cx({
            element: true
        });
        let authors = this.props.authors;
        return (
            <div>
                <FilterableAuthorTable {...authors}/>
                <div ></div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    console.log('FilterableAuthorTableContainer mapStateToProps', state, ownProps);
    return {
        authors: state.authors
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ receiveAuthors }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterableAuthorTableContainer);
