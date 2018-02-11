import React from 'react';
import {connect} from 'react-redux';
import DialogWindow from '../components/common/Dialog';

const Dialog = ({message}) => {
    const show = message.trim().length > 0;
    return <DialogWindow message={message} show={show}/>;
};

function mapStateToProps({dialogMsg}, ownProps) {
    return {
        message: dialogMsg.message,
        timeStamp: dialogMsg.timeStamp

    };
}

export default connect(mapStateToProps)(Dialog);
