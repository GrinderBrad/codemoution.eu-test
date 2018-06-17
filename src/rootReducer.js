import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import index from './components/IndexPage/IndexPageReducer';
import snackBar from './components/common/SnackBar/SnackBarReducer';
import newInvoice from './components/common/new-invoice/NewInvoiceReducer';

export default combineReducers({
    routing,
    index,
    snackBar,
    newInvoice
})