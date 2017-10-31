import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import initialState from './reducers/initialState';
import {beginAjaxCall} from './actions/ajaxCallStatusActions';
import Root from './containers/Root';

const store = configureStore(initialState); //creating store wiht default initalState

//shows the loader when app loads.
store.dispatch(beginAjaxCall(true));

ReactDOM.render(
    <Root store={store} />, document.getElementById('root'));
registerServiceWorker();
