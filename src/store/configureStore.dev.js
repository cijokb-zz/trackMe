import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
//import api from '../middleware/api';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native


const persistConfig = {
    key: 'root',
    storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);


const middleWare = [thunk, reduxImmutableStateInvariant(), createLogger()];

const configureStore = preloadedState => {
    const store = createStore(
        persistedReducer,
        preloadedState,
        composeWithDevTools(
            applyMiddleware(...middleWare)
        )
    );
    const persistor = persistStore(store);

    if (module.hot) {
    // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return {store, persistor};
};

export default configureStore;
