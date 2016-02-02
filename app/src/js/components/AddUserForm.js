var React=require('react'); 
var FireBase=require('firebase');
var mui=require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();
var TextField=mui.TextField;
var Paper=mui.Paper;
var RaisedButton=mui.RaisedButton;

var AddUserForm = React.createClass({ 

	childContextTypes: {
   		muiTheme: React.PropTypes.object
  	},

  	getChildContext() {
	    return {
	      muiTheme: ThemeManager.getCurrentTheme()
	    };
  	},	

  	onAddUser:function(newUser){
  		console.log(newUser);
  		var ref=new FireBase('https://reacttrackme.firebaseio.com/users');
  		ref.push(newUser);
  	},
	onSubmit:function(evt){

		evt.preventDefault();
		var newUser={
			userId:this.refs.userId.getValue(),
			userName:this.refs.userName.getValue(),
			email:this.refs.email.getValue(),
			teamID:this.refs.teamID.getValue(),
			contactNo:this.refs.contactNo.getValue()
		};
		this.onAddUser(newUser);
		this.refs.addUserForm.getDOMNode().reset();
	},
	render:function(){ 
		
		return (	
					<Paper zDepth={1}>
						<h3>Create User</h3>
					  	<form ref ="addUserForm" id="" onSubmit={this.onSubmit} >
					  	
							 <TextField ref="userId" hintText="eg:abc_123" floatingLabelText="User Id" /><br/>
							 <TextField ref="userName" hintText="Name" floatingLabelText="User Name" /><br/>
							 <TextField ref="email" hintText="email" floatingLabelText="Email" /><br/>
							 <TextField ref="teamID" hintText="Team" floatingLabelText="Team" /><br/>
							 <TextField ref="contactNo" hintText="Contact No" floatingLabelText="Contact No" /><br/>
							 <RaisedButton label="Submit" secondary={true} type="submit"/> &nbsp;
							 <RaisedButton label="Cancel" type="reset" />
						</form>
						
					</Paper>
				);
		}
	 });
module.exports=AddUserForm;