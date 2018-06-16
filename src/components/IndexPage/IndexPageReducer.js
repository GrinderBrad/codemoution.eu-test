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
        state.set('invoices', action.payload.invoices);
        state.set('customers', action.payload.customers);
        return state.set('products', action.payload.products);
    }

}, initialState);