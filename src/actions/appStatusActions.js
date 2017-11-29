// application status related actions

//import {fireBaseInit} from './fireBaseActions';
import * as types from './actionTypes';

// export function appInitDone() {
//     return {type: types.INIT_APP};
// }
//
// export function initApp() {
//     //return {type: types.APP_INIT};
//
//     return (dispatch) => {
//         dispatch(appInitDone());
//         dispatch(fireBaseInit());
//     };
// }

export function appInitError(error) {
    return {type: types.INIT_APP_ERROR, error};
}



