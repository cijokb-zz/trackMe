import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import AddTeamPage from '../components/AddTeamPage';
import {createTeam} from '../actions/userActions';

class AddTeam extends Component {
    constructor(props) {
        super(props);
        this.createTeam = this.createTeam.bind(this);
    }
    createTeam(team) {
        this.props.actions.createTeam(team);
    }
    render() {
        return (
            <AddTeamPage createTeam={this.createTeam} {...this.props}/>
        );
    }
}

function mapStateToProps({userActions}, ownProps) {
    return {
        addTeam: userActions.addTeam
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            createTeam: bindActionCreators(createTeam, dispatch)
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTeam);
