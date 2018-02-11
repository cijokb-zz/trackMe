import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import initialState from './reducers/initialState';
import Root from './containers/Root';

import {initApp} from './actions/fireBaseActions';
const configStore = configureStore(initialState); //creating store with default initialState


//initialize the app using firebase
configStore.store.dispatch(initApp());

ReactDOM.render(
    <Root {...configStore}/>, document.getElementById('root'));
registerServiceWorker();
