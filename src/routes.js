import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './containers/App';
import Login from './containers/Login';
import HomePage from './components/common/HomePage';
import NotFoundPage from './components/NotFoundPage';
import AppInitError from './containers/AppInitError';
import LoginForm from './components/LoginForm';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="/login" component={Login}/>
        <Route path="/error" component={AppInitError}/>
      <Route path="/loginForm" component={LoginForm}/>
        <Route path='*' exact={true} component={NotFoundPage} />
    </Route>
);

