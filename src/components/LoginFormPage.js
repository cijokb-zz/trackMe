import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './Login.css';
const LoginForm = () => {
    function formSubmit(e) {
        console.log(e);
    }
    return (
        <div className="LoginForm">
            <TextField
                hintText="email@abc.com"
                floatingLabelText="* Email"
                type="email"
                fullWidth={true}
                id="loginEmail"
            /><br/>
            <TextField
                hintText="Password Field"
                floatingLabelText="* Password"
                type="password"
                fullWidth={true}
                id="loginPassword"
            /><br/>
            <RaisedButton label="Submit" primary={true} style={{'margin': '12px'}} onClick={(e)=>formSubmit(e)}/>
        </div>
    );
};

export default LoginForm;
