import createReducer from '../../utils/createReducer';
import {INIT_DATA} from './IndexPageActions';
import {Map, List} from 'immutable';


const initialState = Map({
    invoices: List([]),
    customers: List([]),
    products: List([]),
    snackBarOpen: false,
});

export default createReducer({
    [INIT_DATA]: (state, action) => {
        return state.merge({
            invoices: action.payload.invoices.data,
            customers: action.payload.customers.data,
            products: action.payload.products.data
        });
    }

}, initialState);