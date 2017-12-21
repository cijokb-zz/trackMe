import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

// const AddTeam = () => (<Paper zDepth={1}>
//     <h3>Add Team</h3>
//     <form ref ="addTeamForm" id="" onSubmit={this.onSubmit} >
//
//         <TextField ref="teamId" hintText="eg:FWK" floatingLabelText="Team Id" /><br/>
//         <TextField ref="teamName" hintText="FrameWork" floatingLabelText="Team Name" /><br/>
//         <RaisedButton label="Submit" secondary={true} type="submit"/> &nbsp;
//         <RaisedButton label="Cancel" type="reset" />
//     </form>
// </Paper>);


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
        //const newTeam = {
        //     teamId: this.refs.teamId.getValue(),
        //     teamName: this.refs.teamName.getValue()
        // };
        // this.onAddTeam(newTeam);
        this.props.createTeam(this.state.team);
    }
    render() {
        return (<div>
            <h3>Add Team</h3>
            <form>
                <TextField
                    ref="teamId"
                    hintText="eg:FWK"
                    floatingLabelText="Team Id"
                    id="teamId"
                    onChange={this.handleOnChange}
                    value={this.state.team.teamId}/><br/>
                <TextField
                    ref="teamName"
                    hintText="FrameWork"
                    floatingLabelText="Team Name"
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
