import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import {Router, browserHistory} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import routes from '../routes';

const Root = ({store}) => (
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={browserHistory} routes={routes}/>
        </MuiThemeProvider>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;
