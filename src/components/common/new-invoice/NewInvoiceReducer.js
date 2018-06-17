import createReducer from '../../../utils/createReducer';
import {ADD_ITEM,
    CHANGE_PRODUCT_NAME,
    CHANGE_PRODUCT_QUANTITY,
    CHANGE_CUSTOMER,
    DELETE_ITEM} from './NewInvoiceActions'
import {Map, List} from 'immutable';

let counter = 0;

const initialState = Map({
    invoiceItems: List([]),
    customer: '',
    counter: 0,
});

export default createReducer({
    [ADD_ITEM]: (state, actions) => {
        return state.update('invoiceItems', items => {
            items = items.push(Map({id: counter + 1, productName: '', quantity: 0}));
            counter++;
            return items;
        });
    },
    [CHANGE_PRODUCT_NAME]: (state, actions) => {
        const {id, newName} = actions.payload;
        return state.update('invoiceItems', invoiceItems => {
            return invoiceItems.update(
                invoiceItems.findIndex((item) => item.get('id') === id),
                (item) => item.set('productName', newName));
        });
    },
    [CHANGE_PRODUCT_QUANTITY]: (state, actions) => {
        const {id, newQuantity} = actions.payload;
        return state.update('invoiceItems', invoiceItems => {
            return invoiceItems.update(
                invoiceItems.findIndex((item) => item.get('id') === id),
                (item) => item.set('quantity', newQuantity));
        });
    },
    [CHANGE_CUSTOMER]: (state, action) => {
        const newCustomer = action.payload;
        return state.set('customer', newCustomer);
    },
    [DELETE_ITEM]: (state, action) => {
        const id = action.payload;
        return state.update('invoiceItems', invoiceItems => {
            invoiceItems = invoiceItems.delete(invoiceItems.findIndex((item) => item.get('id') === id));
            return invoiceItems;
        })
    }

}, initialState);