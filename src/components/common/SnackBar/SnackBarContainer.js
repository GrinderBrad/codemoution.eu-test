import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import SnackBar from './SnackBar';
import * as SnackBarActions from './SnackBarActions';

function mapStateToProps(state) {
    return state.snackBar.toJS();
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(SnackBarActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SnackBar)