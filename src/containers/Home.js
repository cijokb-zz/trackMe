import React, {Component} from 'react';
import {connect} from 'react-redux';
import HomePage from '../components/HomePage';
import {fetchDeviceDetails} from '../actions/fireBaseActions';
import {bindActionCreators} from 'redux';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            devices: null
        };
    }
   
    componentDidMount() {
        this.props.actions.fetchDeviceDetails();
    }

    render() {
        return (
            this.props.devices ? <HomePage devices={this.props.devices}/> : null
        );
    }
}

function mapStateToProps({auth, devices}, ownProps) {
    return {
        isLogged: auth.isLogged,
        devices: devices
    };
}

function mapDispacthToProps(dispatch) {
    return {
        actions: {
            fetchDeviceDetails: bindActionCreators(fetchDeviceDetails, dispatch)
        }
    };
}
export default connect(mapStateToProps, mapDispacthToProps)(Home);
