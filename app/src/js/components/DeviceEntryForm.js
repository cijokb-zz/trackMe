var React=require('react'); 
var FireBase=require('firebase');
var mui=require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();
var TextField=mui.TextField;
var Paper=mui.Paper;
var RaisedButton=mui.RaisedButton;
var Toggle=mui.Toggle;

var DeviceEntryForm = React.createClass({ 

	childContextTypes: {
   		muiTheme: React.PropTypes.object
  	},

  	getChildContext() {
	    return {
	      muiTheme: ThemeManager.getCurrentTheme()
	    };
  	},	
  	onToggle:function(evt,toggled){
  		debugger;
  		evt.target.value=toggled;
  		console.log(evt.target.value);
  	},
  	onAddDevice:function(newDevice){

		console.log(newDevice);
		var ref=new FireBase('https://reacttrackme.firebaseio.com/devices');
  		ref.push(newDevice);
	},
	onSubmit:function(evt){
		debugger;
		evt.preventDefault();
		var newDevice={
			name:this.refs.devName.getValue(),
			tag:this.refs.devTag.getValue(),
			charger:this.refs.charger.state.switched?"true":"false",
			cable:this.refs.cable.state.switched?"true":"false",

		};
		this.onAddDevice(newDevice);
		this.refs.devEntForm.getDOMNode().reset();
	},
	render:function(){ 
		
		return (	
					<Paper zDepth={1}>
						<h3>Add Device</h3>
					  	<form ref ="devEntForm" id="" onSubmit={this.onSubmit} >
					  		
					  		<TextField ref="devName" hintText="Iphone6" floatingLabelText="Device Name" /><br/>
					  		<TextField ref="devTag" hintText="AC1234" floatingLabelText="Device Tag" /><br/>
							<Toggle ref="charger" value="false" name="charger"  label="Charger" defaultToggled={false} onToggle={this.onToggle}/><br/>
							<Toggle ref="cable" value="false" name="cable" label="Cable" defaultToggled={false}/><br/>
							<RaisedButton label="Submit" secondary={true} type="submit"/> &nbsp;
							<RaisedButton label="Cancel" type="reset" />
						</form>
						
					</Paper>
				);
		}
	 });
module.exports=DeviceEntryForm;