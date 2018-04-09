import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './Login.css';
class AddTeamPage extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.resetValues = this.resetValues.bind(this);
        this.state = {
            team: {
                teamId: '',
                teamName: ''
            },
            btnDisabled:true
        };
    }
    componentWillReceiveProps(newProps) {
        if (newProps.addTeam.success) {
            this.resetValues();
        }
    }

    resetValues() {
        const team = {
            teamId: '',
            teamName: ''
        };
        this.setState({team});
    }
    handleOnChange(event) {
        const field = event.target.id;
        const team = this.state.team;
        team[field] = event.target.value;
        this.setState({team},function () {
            this.validateFields();
        });
    }
    handleClick() {
        this.props.createTeam(this.state.team);
    }
    validateFields() {
        const teamId = this.state.team.teamId.trim();
        const teamName = this.state.team.teamName.trim();
        (teamId.length > 0 && teamName.length) ? this.setState({btnDisabled: false}) : this.setState({btnDisabled: true});
    }
    render() {
        return (<div className="AddTeam">
            <h3>Add Team</h3>
            <form>
                <TextField
                    ref="teamId"
                    hintText="eg:FWK"
                    floatingLabelText="Team Id"
                    fullWidth={true}
                    id="teamId"
                    onChange={this.handleOnChange}
                    value={this.state.team.teamId}/><br/>
                <TextField
                    ref="teamName"
                    hintText="FrameWork"
                    floatingLabelText="Team Name"
                    fullWidth={true}
                    id="teamName"
                    onChange={this.handleOnChange}
                    value={this.state.team.teamName}/><br/>
                <RaisedButton label="Submit" primary={true} style={{'margin': '12px'}} onClick={this.handleClick} disabled={this.state.btnDisabled}/>
                <RaisedButton label="Cancel" type="reset" onClick={this.resetValues}/>
            </form>
        </div>);
    }
}


export default AddTeamPage;
