import React, {Component} from 'react';
import {connect} from 'react-redux';
import HomePage from '../components/HomePage';
import FirebaseApi from '../api/firebase';
import {createTeam} from '../actions/userActions';
import {fetchDeviceDetails} from '../actions/fireBaseActions';
import {bindActionCreators} from 'redux';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            devices: null
        };
    }
    componentWillReceiveProps(props) {
        console.log(props.devices);

    }

    componentDidMount() {
        // const data = FirebaseApi.getDatabaseValues('devices');
        // data.on('value', function (snap) {
        //     const devices = [];
        //     snap.forEach(function (itemSnap) {
        //         const device = itemSnap.val();
        //         device.key = itemSnap.key;
        //         devices.push(device);
        //     });
        //     this.setState({devices: devices});
        // }.bind(this));
        this.props.actions.fetchDeviceDetails();
    }

    render() {
        return (
          this.props.devices?<HomePage devices={this.props.devices}/>:null
        );
    }
}

function mapStateToProps({auth,devices}, ownProps) {
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
