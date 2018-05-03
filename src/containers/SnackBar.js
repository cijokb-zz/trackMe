import React from 'react';
import { connect } from 'react-redux';
import SnackBarCmp from '../components/common/SnackBar';

const SnackBar = ({ snackBarMsg = null }) => {
    let cmp = null;
    if (snackBarMsg && snackBarMsg.message) {
        let message = snackBarMsg.message;
        const show = message && message.trim().length > 0;
        cmp = <SnackBarCmp message={message} show={show} />;
    }
    return cmp;
};

function mapStateToProps({ snackBarMsg }, ownProps) {
    return {
        snackBarMsg: snackBarMsg
    };
}


export default connect(mapStateToProps)(SnackBar);
