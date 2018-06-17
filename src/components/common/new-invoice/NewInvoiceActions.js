export const ADD_ITEM = 'NEW_INVOICE/ADD_ITEM';
export const CHANGE_PRODUCT_NAME = 'NEW_INVOICE/CHANGE_PRODUCT_NAME';
export const CHANGE_PRODUCT_QUANTITY = 'NEW_INVOICE/CHANGE_PRODUCT_QUANTITY';
export const CHANGE_CUSTOMER = 'NEW_INVOICE/CHANGE_CUSTOMER';
export const DELETE_ITEM = 'NEW_INVOICE/DELETE_ITEM';

export function addItem() {
    return async (dispatch, getState) => {
        return dispatch({type: ADD_ITEM})
    }
}

export function changeProductName(id, newName) {
    return async (dispatch, getState) => {
        return dispatch({type: CHANGE_PRODUCT_NAME, payload: {id, newName}})
    }
}

export function changeQuantity(id, newQuantity) {
    return async (dispatch, getState) => {
        return dispatch({type: CHANGE_PRODUCT_QUANTITY, payload: {id, newQuantity}})
    }
}

export function changeCustomer(newCustomer) {
    return async (dispatch, getState) => {
        return dispatch({type: CHANGE_CUSTOMER, payload: newCustomer})
    }
}

export function deleteItem(id) {
    return async (dispatch, getState) => {
        return dispatch({type: DELETE_ITEM, payload: id})
    }
}