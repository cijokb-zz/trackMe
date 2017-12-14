import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';

class DialogWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.handleClose = this.handleClose.bind(this);
    }
    componentWillReceiveProps(props) {
        this.setState({open: props.show});
    }

    handleClose () {
        this.setState({open: false});
    };
    render() {
        const actions = [
            <FlatButton
                label="Ok"
                primary={true}
                onClick={this.handleClose}
            />,
        ];
        return (
            <Dialog
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
            >{this.props.message}</Dialog>
        );
    }
};

DialogWindow.PropTypes = {
    show: PropTypes.bool,
    message: PropTypes.string
};

DialogWindow.defaultProps = {
    show: false,
    message: ''
};
export default DialogWindow;
