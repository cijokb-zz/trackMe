var React=require('react');
var mui=require('material-ui');
var FireBase=require('firebase');
var ThemeManager = new mui.Styles.ThemeManager();
var List=mui.List;
var DeviceItem=require('./DeviceItem');

var DeviceList=React.createClass({
	childContextTypes: {
    	muiTheme: React.PropTypes.object
  	},

  	getChildContext() {
    	return {
      	muiTheme: ThemeManager.getCurrentTheme()
    	};
  	},

	loadData:function(){
			console.log("devices List data Loaded");
			var ref=new FireBase('https://reacttrackme.firebaseio.com/devices');
			ref.on('value',function (snap) {
				var devices=[];
					snap.forEach(function(itemSnap){
					var device=itemSnap.val();
					console
					device.key=itemSnap.key();
					devices.push(device);
					
				});
				this.setState({
					devices:devices	

				});	
			}.bind(this));
	},
	componentDidMount:function(){
		console.log("Device List mounted");
		this.loadData();

	},

	getInitialState:function(){
		return {

			users:[],
			devices:[]
		}	
	},

	render:function(){
		
		var deviceItems=this.state.devices.map(function(device){
			return <DeviceItem key={device.key} devId={device.devId} name={device.name} pheripherals={device.pheripherals}/> 	
		});
		
		return (
					<List>{deviceItems}</List>
				)
	}
});
module.exports=DeviceList;