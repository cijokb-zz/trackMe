import React, {Component} from 'react';
import {connect} from 'react-redux';
import HomePage from '../components/HomePage';
import FirebaseApi from '../api/firebase';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            devices: null
        };
    }

    componentWillReceiveProps(props) {
        if (props.isLogged) {
            const data = FirebaseApi.getDatabaseValues('devices');
            data.on('value', function(snap) {
                const devices = [];
                snap.forEach(function(itemSnap) {
                    const device = itemSnap.val();
                    device.key = itemSnap.key;
                    devices.push(device);
                });
                this.setState({devices: devices});
            }.bind(this));
        }
    }

    render() {
        return (
            <HomePage devices={this.state.devices}/>
        );
    }
}
function mapStateToProps(state, ownProps) {
    return {
        isLogged: state.fireBase.auth.isLogged
    };
}

export default connect(mapStateToProps)(Home);
