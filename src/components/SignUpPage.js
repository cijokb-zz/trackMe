import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Utils from '../Utils';
class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.resetValues = this.resetValues.bind(this);
        this.comparePassword = this.comparePassword.bind(this);
        this.validateFields = this.validateFields.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.state = {
            user: {
                email: '',
                name: '',
                contactNo: '',
                password: '',
                password2: '',
                confirmPassword: false,
            },
            btnDisabled: true
        };
    }
    handleOnChange(event) {
        const field = event.target.id;
        const user = this.state.user;
        user[field] = event.target.value;
        this.setState({user}, function () {
            this.validateFields();
        });
    }
    
    handleClick() {
        this.props.createUserWithEmailAndPassword(this.state.user);
    }
    validateFields() {
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

    resetValues() {
        const user={
            email: '',
            name: '',
            contactNo: '',
            password: '',
            password2: ''
        }
        this.setState({user});
    }
    render() {
        return (
            <div className="SignUpForm">
                <form onSubmit={this.handleClick}>
                    <TextField
                        hintText="Name"
                        floatingLabelText="* Name"
                        type="text"
                        fullWidth={true}
                        id="name"
                        ref="name"
                        onChange={this.handleOnChange}
                        value={this.state.user.name}
                        required
                    /><br/>
                    <TextField
                        hintText="email@abc.com"
                        floatingLabelText="* Email"
                        type="email"
                        fullWidth={true}
                        id="email"
                        ref="email"
                        onChange={this.handleOnChange}
                        value={this.state.user.email}
                        required
                    /><br/>
                    <TextField
                        hintText="Contact Number"
                        floatingLabelText="* Contact Number"
                        type="number"
                        fullWidth={true}
                        id="contactNo"
                        ref="contactNo"
                        onChange={this.handleOnChange}
                        value={this.state.user.contactNo}
                        required
                    /><br/>
                    <TextField
                        hintText="Min 6 cahracters"
                        floatingLabelText="* Password"
                        type="password"
                        fullWidth={true}
                        id="password"
                        ref="password"
                        onChange={this.handleOnChange}
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                        value={this.state.user.password}
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
                        value={this.state.user.password2}
                        required
                    /><br/>
                    <RaisedButton label="Submit" primary={true} style={{'margin': '12px'}}
                        onClick={this.handleClick} disabled={this.state.btnDisabled} />
                    <RaisedButton label="Cancel" primary={true} style={{'margin': '12px'}}
                        onClick={this.resetValues} />    
                </form>
            </div>
        );
    }
}

export default SignUpPage;