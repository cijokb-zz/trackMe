import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import SnackBarCmp from '../components/common/SnackBar';

const SnackBar = ({message}) => {
    const show = message.trim().length > 0;
    return <SnackBarCmp message={message} show={show}/>;
};

function mapStateToProps(state, ownProps) {
    return {
        message: state.snackBarMsg
    };
}

export default connect(mapStateToProps)(SnackBar);
