import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import initialState from './reducers/initialState';
import {beginAjaxCall} from './actions/ajaxCallStatusActions';

const store = configureStore(initialState); //creating store wiht default initalState

//shows the loader when app loads.
store.dispatch(beginAjaxCall(true));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
