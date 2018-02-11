import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function initFireBaseReducer (state = initialState.init, action) {
    switch (action.type) {
    case types.FIREBASE_INIT:
        return Object.assign({}, state, {success: action.initStatus});
    //return {...state,auth:{...state.auth,user:action.user}};
    case types.FIREBASE_INIT_ERROR :
        return Object.assign({}, state, {
            success: false,
            errorCode: action.error.code,
            errorDetails: action.error.message
        });
        //return {...state,init:{...state.init,success:false,
        // errorCode:action.error.code,errorDetails:action.error.message}};

    default :
        return state;
    }
}
