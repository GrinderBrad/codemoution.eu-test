export const SNACKBAR = 'SNACKBAR';

export function closeSnackBar() {
    return async (dispatch, getState) => {
        dispatch({type: SNACKBAR, payload: {open: false}});
    }
}