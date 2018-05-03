import React from 'react';
import {connect} from 'react-redux';
import DialogWindow from '../components/common/Dialog';

const Dialog = ({dialogMsg = null}) => {
    let cmp = null;
    if (dialogMsg && dialogMsg.message) {
        let message = dialogMsg.message;
        const show = message && message.trim().length > 0;
        cmp = <DialogWindow message={message} show={show} />;
    }
    return cmp;
};

function mapStateToProps({dialogMsg}, ownProps) {
    return {
        dialogMsg: dialogMsg
    };
}

export default connect(mapStateToProps)(Dialog);
