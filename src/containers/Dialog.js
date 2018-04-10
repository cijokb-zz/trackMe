import React from 'react';
import {connect} from 'react-redux';
import DialogWindow from '../components/common/Dialog';

const Dialog = ({dialogMsg = null}) => {
    let cmp = null;
    if (dialogMsg) {
        let message = dialogMsg.message || null;
        const show = message.trim().length > 0;
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
