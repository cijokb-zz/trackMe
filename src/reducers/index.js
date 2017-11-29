/**
 * Created by cijo.kb on 04/05/17.
 */
//import {combineReducers} from 'redux-immutable';
import isLoading from './ajaxCallStatusReducer';
import users from './createUserReducer';
import fireBase from './fireBaseReducer';
import appStatus from './appStatusReducer';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    fireBase,
    appStatus,
    isLoading

});

export default rootReducer;
