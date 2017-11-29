'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ajaxCallStatusReducer = require('./ajaxCallStatusReducer');

var _ajaxCallStatusReducer2 = _interopRequireDefault(_ajaxCallStatusReducer);

var _createUserReducer = require('./createUserReducer');

var _createUserReducer2 = _interopRequireDefault(_createUserReducer);

var _fireBaseReducer = require('./fireBaseReducer');

var _fireBaseReducer2 = _interopRequireDefault(_fireBaseReducer);

var _appStatusReducer = require('./appStatusReducer');

var _appStatusReducer2 = _interopRequireDefault(_appStatusReducer);

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
    fireBase: _fireBaseReducer2.default,
    appStatus: _appStatusReducer2.default,
    isLoading: _ajaxCallStatusReducer2.default

}); /**
     * Created by cijo.kb on 04/05/17.
     */
//import {combineReducers} from 'redux-immutable';
exports.default = rootReducer;
//# sourceMappingURL=index.js.map