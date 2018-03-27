import React, { Component } from 'react';
import './App.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//actions
import {beginAsyncCall,showingSnackBar} from '../actions/ajaxCallStatusActions';
import {authInitialized, fireBaseInitError,} from '../actions/fireBaseActions';

//presentational components
import Loaders from '../components/common/Loaders';
//import HeaderBar from '../components/common/HeaderBar';
import Footer from '../containers/Footer';

import Header from '../containers/Header';
import SnackBar from '../containers/SnackBar';
import Dialog from '../containers/Dialog';
import FirebaseApi from '../api/firebase';
import * as firebase from 'firebase/firebase-browser';
import { browserHistory } from 'react-router';

class App extends Component {
    componentWillMount() {
        const me = this;
        firebase.auth().getRedirectResult().then(function(result) {
            // The signed-in user info.
            let user = result.user;
            if (user) {
                FirebaseApi.saveUserData(user.uid, user.email, user.displayName, user.phoneNumber);
                browserHistory.push('/');
                me.props.actions.showingSnackBar('Login successfull');
            }
        }).catch(function(error) {
            console.log(error);
            me.props.actions.showingSnackBar('!Oops something went wrong');
        });
    }
    render() {
        return (
            <div className="App">
                <Header/>
                <Loaders currentStatus = {this.props.isLoading ? 'loading' : 'hide'} />
                {this.props.children}
                <Dialog/>
                <SnackBar/>
            </div>
        );
    }
}

function mapStateToProps ({isLoading, init, auth}, ownProps) {
    return {
        isLoading: isLoading,
        appInitError: init,
        userInfo: auth
    };
}

function mapDispatchToProps (dispatch) {
    return {
        actions: {
            beginAjaxCall: bindActionCreators(beginAsyncCall, dispatch),
            authInitialized: bindActionCreators(authInitialized, dispatch),
            appInitError: bindActionCreators(fireBaseInitError, dispatch),
            showingSnackBar: bindActionCreators(showingSnackBar, dispatch)

        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
