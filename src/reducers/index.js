/**
 * Created by cijo.kb on 04/05/17.
 */
//import {combineReducers} from 'redux-immutable';
import isLoading from './ajaxCallStatusReducer';
//import users from './createUserReducer';
import {combineReducers} from 'redux';
// import fireBase from './fireBaseReducer';
import appStatus from './appStatusReducer';
import snackBarMsg from './snackBarReducer';
import dialogMsg from './dialogReducer';
import userActions from './userActionsReducer';
import init from './initFirebaseReducer';
import auth from './authFirebaseReducer';
import user from './createUserReducer';
import devices from './devicesReducer';


const rootReducer = combineReducers({
    init,
    auth,
    user,
    devices,
    appStatus,
    isLoading,
    snackBarMsg,
    dialogMsg,
    userActions


});

export default rootReducer;
