import createReducer from '../../../utils/createReducer';
import {Map, List} from 'immutable';
import {SNACKBAR} from './SnackBarActions'


const initialState = Map({
    snackBarOpen: false,
    snackBarText: ''
});

export default createReducer({
    [SNACKBAR]: (state, action) => {
        if(action.payload.text){
            state.set('snackBarText', action.payload.text);
        }
        return state.set('snackBarOpen', action.payload.open)
    }

}, initialState);