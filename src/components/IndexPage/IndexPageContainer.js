import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import IndexPage from './IndexPage';
import * as IndexPageActions from './IndexPageActions';

function mapStateToProps(state) {
    return state.index.toJS();
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(IndexPageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)