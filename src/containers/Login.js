import React, {Component} from 'react';
import LoginPage from '../components/LoginPage';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {signInWithEmailAuthProvider, signInWithGoogleAuthProvider} from '../actions/fireBaseActions';
import { browserHistory } from 'react-router';

class Login extends Component {
    constructor(props) {
        super(props);
        this.signInWithEmailAuthProvider = this.signInWithEmailAuthProvider.bind(this);
        this.signInWithGoogleAuthProvider = this.signInWithGoogleAuthProvider.bind(this);
    }
    signInWithEmailAuthProvider() {
        //window.alert('signInWithEmail');
        //this.props.actions.signInWithEmailAuthProvider();
        browserHistory.push('/LoginForm');
    }

    signInWithGoogleAuthProvider() {
        //window.alert('signInWithGoogle');
        this.props.actions.signInWithGoogleAuthProvider();
    }
    render() {
        return (
            <LoginPage
                isLogged={this.props.isLogged}
                signInWithEmailAuthProvider={this.signInWithEmailAuthProvider}
                signInWithGoogleAuthProvider ={this.signInWithGoogleAuthProvider}
            />
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        isLogged: state.fireBase.auth.isLogged
    };
}

function mapDispatchToProps (dispatch) {
    return {
        actions: {
            signInWithEmailAuthProvider: bindActionCreators(signInWithEmailAuthProvider, dispatch),
            signInWithGoogleAuthProvider: bindActionCreators(signInWithGoogleAuthProvider, dispatch)
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
