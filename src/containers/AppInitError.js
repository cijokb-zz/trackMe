import React from 'react';
import AppInitErrorPage from '../components/AppInitErrorPage';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';


const AppInitError = (props) => {
    let cmp = null;
    if (props && props.error.success === false) {
        cmp = <AppInitErrorPage error={props.error} />;
    }
    else {
        /*
        redirecting to the Home screen when the user manually navigate to the error page
        when no errors occured.
        */
        browserHistory.push('/');
    }
    return cmp;
};

function mapStateToProps({ init }, ownProps) {
    return {
        error: init
    };
}

// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(fireBaseInitError, dispatch)
//     };
// }

export default connect(mapStateToProps)(AppInitError);
