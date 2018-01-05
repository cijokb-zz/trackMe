import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './containers/App';
import Login from './containers/Login';
import HomePage from './containers/Home';
import NotFoundPage from './components/NotFoundPage';
import AppInitError from './containers/AppInitError';
import LoginForm from './containers/LoginForm';
import SignUp from './containers/SignUp';
import AddTeam from './containers/AddTeam';
import AddDevice from './containers/AddDevice';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="/login" component={Login}/>
        <Route path="/error" component={AppInitError}/>
        <Route path="/loginForm" component={LoginForm}/>
        <Route path="/signUp" component={SignUp}/>
        <Route path="/addTeam" component={AddTeam}/>
        <Route path="/addDevice" component={AddDevice}/>
        <Route path="/home" component={HomePage}/>
        <Route path="*" exact={true} component={NotFoundPage} />
    </Route>
);

