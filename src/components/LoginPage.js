import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';

const LoginPage = ({isLogged, signInWithEmailAuthProvider, signInWithGoogleAuthProvider}) => (!isLogged ? <div className="Login">
    <ul>
        <li>
            <button onClick={signInWithEmailAuthProvider}><span>Sign in with email</span></button>
        </li>
        <li>
            <button onClick={signInWithGoogleAuthProvider}><span>Sign in with Google</span></button>
        </li>
    </ul>
</div> : null
);

LoginPage.defaultProps = {
    isLogged: false
};

LoginPage.propTypes = {
    isLogged: PropTypes.bool
};

export default LoginPage;
