import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './Login.css';
class AddTeamPage extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.state = {
            team: {
                teamId: '',
                teamName: ''
            }
        };
    }
    componentWillReceiveProps(newProps) {
        const team = {
            teamId: '',
            teamName: ''
        };
        if (newProps.addTeam.success) {
            this.setState({team});
        }
    }
    handleOnChange(event) {
        const field = event.target.id;
        const team = this.state.team;
        team[field] = event.target.value;
        this.setState({team});
    }
    handleClick() {
        this.props.createTeam(this.state.team);
    }
    render() {
        return (<div className="LoginForm">
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
                <RaisedButton label="Submit" primary={true} style={{'margin': '12px'}} onClick={this.handleClick}/>
                <RaisedButton label="Cancel" type="reset" />
            </form>
        </div>);
    }
}


export default AddTeamPage;
