import {combineReducers} from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr'
import {routerReducer as routing} from 'react-router-redux';
import index from './components/IndexPage/IndexPageReducer';

export default combineReducers({
    routing,
    toastrReducer,
    index,
})