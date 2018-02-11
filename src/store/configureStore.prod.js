import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//import api from '../middleware/api';
import rootReducer from '../reducers';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

const configureStore = preloadedState => createStore(
    rootReducer,
    preloadedState,
    //applyMiddleware(thunk, api)
    applyMiddleware(thunk)
);

export default configureStore;
