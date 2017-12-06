import React, {Component} from 'react';
import LoginFormPage from '../components/LoginFormPage';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {signInWithEmailAuthProvider} from '../actions/fireBaseActions';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.signInWithEmailAuthProvider = this.signInWithEmailAuthProvider.bind(this);
    }
    signInWithEmailAuthProvider(email, password) {
        console.log(email + password);
        this.props.actions.signInWithEmailAuthProvider(email, password);
    }
    render() {
        return (
            <LoginFormPage

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
            signInWithEmailAuthProvider: bindActionCreators(signInWithEmailAuthProvider, dispatch)
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
