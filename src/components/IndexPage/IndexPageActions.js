import {get, post} from '../../utils/api';
import {SNACKBAR} from '../common/SnackBar/SnackBarActions'
export const INIT_DATA = 'INDEX/INIT_DATA';

export function initData(){
    return async (dispatch, getState) => {
         const invoices = await get('invoices');
         const customers = await get('customers');
         const products = await get('products');
         return dispatch({type: INIT_DATA, payload: {invoices, customers, products}})
    }
}

export function submitProduct(product) {
    return async (dispatch, getState) => {
        try {
            const response = post('products', product);
            dispatch({type: SNACKBAR, payload: {open: true, text: 'Product successfully created'}});
        } catch(error) {

        }
        return;
    }
}
//
// export function handleSnackBar(open, text) {
//     return async (dispatch, getState) => {
//         return dispatch({type: SNACKBAR, payload: {open, text}});
//     }
// }