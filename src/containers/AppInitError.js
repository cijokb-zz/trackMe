import React from 'react';
import AppInitErrorPage from '../components/AppInitErrorPage';
//import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//import {fireBaseInitError} from '../actions/fireBaseActions';


const AppInitError = (props) => (
    <AppInitErrorPage error={props.error}/>
);

function mapStateToProps(state, ownProps) {
    return {
        error: state.fireBase.init
    };
}

// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(fireBaseInitError, dispatch)
//     };
// }

export default connect(mapStateToProps)(AppInitError);
