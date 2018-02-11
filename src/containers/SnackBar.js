import React from 'react';
import {connect} from 'react-redux';
import SnackBarCmp from '../components/common/SnackBar';

const SnackBar = ({message}) => {
    const show = message.trim().length > 0;
    return <SnackBarCmp message={message} show={show}/>;
};

function mapStateToProps({snackBarMsg}, ownProps) {
    return {
        message: snackBarMsg.message,
        timeStamp: snackBarMsg.timeStamp
    };
}

export default connect(mapStateToProps)(SnackBar);
