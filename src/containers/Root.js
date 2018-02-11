import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import {Router, browserHistory} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import routes from '../routes';
import { PersistGate } from 'redux-persist/integration/react';


const Root = ({store, persistor}) => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <MuiThemeProvider>
                <Router history={browserHistory} routes={routes}/>
            </MuiThemeProvider>
        </PersistGate>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;
