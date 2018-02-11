import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import AddDevicePage from '../components/AddDevicePage';
import {createDevice} from '../actions/userActions';
import FirebaseApi from '../api/firebase';

class AddDevice extends Component {
    constructor(props) {
        super(props);
        this.createDevice = this.createDevice.bind(this);
        this.state = {
            teams: []
        };
    }
    createDevice(device) {
        this.props.actions.createDevice(device);
    }
    componentDidMount() {
        const data = FirebaseApi.getDatabaseValues('teams');
        data.on('value', function (snap) {
            const teams = [];
            snap.forEach(function (itemSnap) {
                const team = itemSnap.val();
                team.key = itemSnap.key;
                teams.push(team);
            });
            this.setState({teams: teams});
        }.bind(this));
    }
    render() {
        return (
            <AddDevicePage createDevice={this.createDevice} teams={this.state.teams} {...this.props} />
        );
    }
}

function mapStateToProps({userActions}, ownProps) {
    return {
        addDevice: userActions.addDevice
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
