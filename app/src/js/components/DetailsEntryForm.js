var React=require('react'); 
var FireBase=require('firebase');
var mui=require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();
var TextField=mui.TextField;
var SelectField=mui.SelectField;
var Paper=mui.Paper;
var RaisedButton=mui.RaisedButton;
var Toggle=mui.Toggle;
var DatePicker=mui.DatePicker;

var DetailsEntryForm = React.createClass({ 
	mixins:[React.addons.LinkedStateMixin],
	childContextTypes: {
   		muiTheme: React.PropTypes.object
  	},

  	getChildContext() {
	    return {
	      muiTheme: ThemeManager.getCurrentTheme()
	    };
  	},	
  	loadDeviceData:function(){
  		console.log("fetching data from device table");
			var ref=new FireBase('https://reacttrackme.firebaseio.com/devices');
			ref.on('value',function (snap) {
				var devices=[];
					snap.forEach(function(itemSnap){
					var device=itemSnap.val();
					device.key=itemSnap.key();
					devices.push(device);
					
				});
				this.setState({
					devices:devices	

				});	
			}.bind(this));

  	},
  	getInitialState:function(){
  		return {

  			devices:[]
  		}
  		
  	},
  	componentDidMount:function(){
		console.log("Device List mounted");
		this.loadDeviceData();

	},	
  	onToggle:function(evt,toggled){
  		evt.target.value=toggled;
  		console.log(evt.target.value);
  	},
  	onEntry:function(newEntry){

		console.log(newEntry);
		var ref=new FireBase('https://reacttrackme.firebaseio.com/transactionTable');
  		ref.push(newEntry);
	},
	onSubmit:function(evt){
		evt.preventDefault();
		debugger;
		var newEntry={
			userId:this.refs.userName.getValue(),
			devTag:this.refs.devTag.getValue(),
			date:this.refs.transDate.getDate().toLocaleDateString(),
			charger:this.refs.charger.state.switched?"true":"false",
			cable:this.refs.cable.state.switched?"true":"false",

		};

		this.onEntry(newEntry);
		this.refs.devEntForm.getDOMNode().reset();
	},
	render:function(){ 
		var today=new Date();
		return (	
					<Paper zDepth={1}>
						<h3>Enter Details</h3>
					  	<form ref ="devEntForm" id="" onSubmit={this.onSubmit} >
					  		
					  		<TextField ref="userName" hintText="cijo" floatingLabelText="User Name" /><br/>
					  		<SelectField  hintText="devices" valueMember="tag" displayMember="name" menuItems={this.state.devices}/>
					  		<DatePicker ref="transDate" hintText="DD/MM/YYYY" autoOk={true} minDate={today}/>
					  		<Toggle ref="charger" value="false" name="charger"  label="Charger" defaultToggled={false} onToggle={this.onToggle}/><br/>
							<Toggle ref="cable" value="false" name="cable" label="Cable" defaultToggled={false}/><br/>
							<RaisedButton label="Submit" secondary={true} type="submit"/> &nbsp;
							<RaisedButton label="Cancel" type="reset" />
						</form>
						
					</Paper>
				);
		}
	 });
module.exports=DetailsEntryForm;