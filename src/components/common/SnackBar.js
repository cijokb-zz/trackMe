import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import PropTypes from 'prop-types';

const SnackBarCmp = ({message, show}) => (
    <Snackbar
        open={show}
        message={message}
        autoHideDuration={4000}
        onRequestClose={this.handleRequestClose}
    />);

SnackBarCmp.PropTypes = {
    show: PropTypes.bool,
    message: PropTypes.string
};

SnackBarCmp.defaultProps = {
    show: false,
    message: ''
};
export default SnackBarCmp;
