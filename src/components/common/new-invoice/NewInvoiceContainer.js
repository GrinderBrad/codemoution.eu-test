import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import NewInvoice from './NewInvoice';
import * as NewInvoiceActions from './NewInvoiceActions';

function mapStateToProps(state) {
    return {...state.newInvoice.toJS(), ...state.index.toJS()};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(NewInvoiceActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewInvoice)