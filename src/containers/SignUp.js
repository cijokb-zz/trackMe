import React, {Component} from 'react';
import SignUpPage from '../components/SignUpPage';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {createUserWithEmailAndPassword} from '../actions/fireBaseActions';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.createUserWithEmailAndPassword = this.createUserWithEmailAndPassword.bind(this);
    }
    createUserWithEmailAndPassword({email, password}) {
        console.log(email + password);
        this.props.actions.createUserWithEmailAndPassword(email, password);
    }
    render() {
        return (
            <SignUpPage
                createUserWithEmailAndPassword={this.createUserWithEmailAndPassword}
            />
        );
    }
}

function mapStateToProps({auth}, ownProps) {
    return {
        isLogged: auth.isLogged
    };
}

function mapDispatchToProps (dispatch) {
    return {
        actions: {
            createUserWithEmailAndPassword: bindActionCreators(createUserWithEmailAndPassword, dispatch)
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
