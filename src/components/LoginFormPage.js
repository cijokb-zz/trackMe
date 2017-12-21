import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './Login.css';
import {Link} from 'react-router';

class LoginFormPage extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.state = {
            user: {
                email: '',
                password: ''
            }
        };
    }
    handleOnChange(event) {
        const field = event.target.id;
        const user = this.state.user;
        user[field] = event.target.value;
        this.setState({user});
    }
    handleClick(event) {
        this.props.signInWithEmailAuthProvider(this.state.user);
    }
    render() {
        return (
            <div className="LoginForm">
                <form>
                    <TextField
                        hintText="email@abc.com"
                        floatingLabelText="* Email"
                        type="email"
                        fullWidth={true}
                        id="email"
                        ref="email"
                        onChange={this.handleOnChange}
                    /><br/>
                    <TextField
                        hintText="Password Field"
                        floatingLabelText="* Password"
                        type="password"
                        fullWidth={true}
                        id="password"
                        ref="password"
                        onChange={this.handleOnChange}
                    /><br/>
                    <div className="LoginExtra">
                        <Link to="signUp" className ="SignUp">New user</Link>
                        <span>|</span>
                        <Link to="forgotPassword" className ="ForgotPassword">Forgot password ?</Link>
                    </div>
                    <RaisedButton label="Submit" primary={true} style={{'margin': '12px'}} onClick={this.handleClick}/>
                </form>
            </div>
        );
    }
}

export default LoginFormPage;
