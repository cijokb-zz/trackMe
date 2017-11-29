import React, { Component } from 'react';
import './App.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//actions
import {beginAsyncCall} from '../actions/ajaxCallStatusActions';
import {authInitialized, fireBaseInitError} from '../actions/fireBaseActions';

//presentational components
import Loaders from '../components/common/Loaders';
import HeaderBar from '../components/common/HeaderBar';
import Footer from '../components/common/Footer';

class App extends Component {
    componentWillReceiveProps(props) {
    //console.log("componentWillReceiveProps",props);
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
        //console.log('render');
        return (
            <div className="App">
                <HeaderBar isLogged={this.props.isLogged}/>
                <Loaders currentStatus={this.props.isLoading ? 'loading' : 'hide'}/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}

function mapStateToProps (state, ownProps) {
    return {
        isLoading: state.isLoading,
        isLogged: state.fireBase.auth.isLogged,
        appInitError: state.fireBase.init
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
