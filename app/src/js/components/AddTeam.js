var React=require('react'); 
var FireBase=require('firebase');
var mui=require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();
var TextField=mui.TextField;
var Paper=mui.Paper;
var RaisedButton=mui.RaisedButton;

var AddTeam = React.createClass({ 
	childContextTypes: {
   		muiTheme: React.PropTypes.object
  	},

  	getChildContext() {
	    return {
	      muiTheme: ThemeManager.getCurrentTheme()
	    };
  	},
  	onAddTeam:function(newTeam){
  		console.log(newTeam);
  		var ref=new FireBase('https://reacttrackme.firebaseio.com/teams');
  		ref.push(newTeam);
  	},	
  	onSubmit:function(){
  		var newTeam={
  			teamId:this.refs.teamId.getValue(),
  			teamName:this.refs.teamName.getValue()
  		}
  		this.onAddTeam(newTeam);
  	},
	render:function(){ 
		return (<Paper zDepth={1}>
						<h3>Add Team</h3>
					  	<form ref ="addTeamForm" id="" onSubmit={this.onSubmit} >
					  	
							 <TextField ref="teamId" hintText="eg:FWK" floatingLabelText="Team Id" /><br/>
							 <TextField ref="teamName" hintText="FrameWork" floatingLabelText="Team Name" /><br/>
							 <RaisedButton label="Submit" secondary={true} type="submit"/> &nbsp;
							 <RaisedButton label="Cancel" type="reset" />
						</form>
						
					</Paper>);
	 }
});


module.exports=AddTeam;
