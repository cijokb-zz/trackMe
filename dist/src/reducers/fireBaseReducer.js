'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = fireBaseReducer;

var _actionTypes = require('../actions/actionTypes');

var types = _interopRequireWildcard(_actionTypes);

var _initialState = require('./initialState');

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function fireBaseReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default.fireBase;
    var action = arguments[1];

    switch (action.type) {
        case types.FIREBASE_INIT:
            return Object.assign({}, state, { auth: Object.assign({}, state.auth, { user: action.user }) });
        //return {...state,auth:{...state.auth,user:action.user}};

        case types.FIREBASE_INIT_ERROR:
            return Object.assign({}, state, { init: Object.assign({}, state.init, { success: false,
                    errorCode: action.error.code,
                    errorDetails: action.error.message }) });
        //return {...state,init:{...state.init,success:false,
        // errorCode:action.error.code,errorDetails:action.error.message}};

        case types.AUTH_INITIALIZATION_DONE:
            return Object.assign({}, state.auth, { initialized: true });

        case types.AUTH_LOGGED_IN_SUCCESS:
            return Object.assign({}, state.auth, { isLogged: true, currentUserUID: action.userUID });

        case types.AUTH_LOGGED_OUT_SUCCESS:
            return Object.assign({}, state.auth, { isLogged: false, currentUserUID: null });

        default:
            return state;
    }
}
//# sourceMappingURL=fireBaseReducer.js.map