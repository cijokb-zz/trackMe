import React, { Component } from 'react';
import './App.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//actions
import {beginAsyncCall} from '../actions/ajaxCallStatusActions';
import {authInitialized, fireBaseInitError} from '../actions/fireBaseActions';

//presentational components
import Loaders from '../components/common/Loaders';
//import HeaderBar from '../components/common/HeaderBar';
import Footer from '../containers/Footer';

import Header from '../containers/Header';
import SnackBar from '../containers/SnackBar';
import Dialog from '../containers/Dialog';

class App extends Component {
    componentWillReceiveProps(props) {
        console.log('componentWillReceiveProps', props);
    // if(!this.props.appInitError.success) {
    //   this.props.router.push('/error');
    // }
    }
    componentDidUpdate() {
        //console.log("componentDidUpdate");
    }
    componentDidMount() {
        //console.log("componentDidMount");
    }

    componentWillMount() {
        //console.log("componentWillMount");
        // const me = this;
        // FirebaseApi.initAuth().then(
        //     user => {
        //         me.props.actions.authInitialized(user);
        //     }
        // ).catch(
        //     error => {
        //         me.props.actions.beginAjaxCall(false);
        //         me.props.actions.appInitError(error);
        //         console.error('error while initializing Firebase Auth'); // eslint-disable-line no-console
        //         console.error(error); // eslint-disable-line no-console
        //     });
    }
    render() {
        console.log('render- App.js');
        return (
            <div className="App">
                <Header/>
                <Loaders currentStatus={this.props.isLoading ? 'loading' : 'hide'}/>
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
            appInitError: bindActionCreators(fireBaseInitError, dispatch)
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
