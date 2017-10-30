/**
 * Created by cijo.kb on 04/05/17.
 */
//import {combineReducers} from 'redux-immutable';
import isLoading from './ajaxCallStatusReducer';
import users from './createUserReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    isLoading,
    users
});

export default rootReducer;
