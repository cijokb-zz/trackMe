// import {createStore, applyMiddleware} from 'redux';
// import rootReducer from '../reducers/';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
//
// const middleware = [thunk, reduxImmutableStateInvariant()];
// export default function configureStore(initialState) {
//     return createStore(
//         rootReducer,
//         composeWithDevTools(
//             applyMiddleware(...middleware)
//         // other store enhancers if any
//         )
//     );
// }

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./configureStore.prod');
} else {
    module.exports = require('./configureStore.dev');
}
