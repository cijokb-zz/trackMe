import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import AddDevicePage from '../components/AddDevicePage';
import {createDevice} from '../actions/userActions';

class AddDevice extends Component {
    constructor(props) {
        super(props);
        this.createDevice = this.createDevice.bind(this);
    }
    createDevice(device) {
        this.props.actions.createDevice(device);
    }
    render() {
        return (
            <AddDevicePage createDevice={this.createDevice} {...this.props}/>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        addDevice: state.userActions.addDevice
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            createDevice: bindActionCreators(createDevice, dispatch)
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AddDevice);
