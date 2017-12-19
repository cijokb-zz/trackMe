import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Utils from '../Utils';
class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.comparePassword = this.comparePassword.bind(this);
        this.validateFields = this.validateFields.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.state = {
            user: {
                email: '',
                password: '',
                password2: '',
                confirmPassword: false,
            },
            btnDisabled: true
        };
    }
    handleOnChange(event) {
        console.log('handleOnChange');
        const field = event.target.id;
        const user = this.state.user;
        user[field] = event.target.value;
        this.setState({user}, function () {
            console.log('callback fired');
            this.validateFields();
        });
    }
    handleClick() {
        console.log(this.state.user);
        this.props.createUserWithEmailAndPassword(this.state.user);
    }
    validateFields() {
        console.log('validatefields');
        const passCheck = this.comparePassword();
        const emailCheck = this.validateEmail();
        (emailCheck && passCheck) ? this.setState({btnDisabled: false}) : this.setState({btnDisabled: true});
    }

    comparePassword() {
        const password = this.state.user.password;
        const confirmPassword = this.state.user.password2;
        return password === confirmPassword && password.length >= 6;
    }
    validateEmail() {
        const email = this.state.user.email;
        return Utils.validateEmail(email);
    }

    render() {
        console.log('render');
        return (
            <div className="SignUpForm">
                <form onSubmit={this.handleClick}>
                    <TextField
                        hintText="email@abc.com"
                        floatingLabelText="* Email"
                        type="email"
                        fullWidth={true}
                        id="email"
                        ref="email"
                        onChange={this.handleOnChange}
                        required
                    /><br/>
                    <TextField
                        hintText="Password Field"
                        floatingLabelText="* Password"
                        type="password"
                        fullWidth={true}
                        id="password"
                        ref="password"
                        onChange={this.handleOnChange}
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                        required
                    /><br/>
                    <TextField
                        hintText="Re-enter password"
                        floatingLabelText="* Confirm Password"
                        type="password"
                        fullWidth={true}
                        id="password2"
                        ref="password2"
                        onChange={this.handleOnChange}
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                        required
                    /><br/>
                    <RaisedButton label="Submit" primary={true} style={{'margin': '12px'}}
                        onClick={this.handleClick} disabled={this.state.btnDisabled} />
                </form>
            </div>
        );
    }
}

export default SignUpPage;