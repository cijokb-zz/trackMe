var React=require('react');
var RouteHandler=require('react-router').RouteHandler;
var AddUserForm=require('./AddUserForm');
var DeviceEntryForm=require('./DeviceEntryForm');
var DeviceList=require('./DeviceList');
var UsersList=require('./UsersList');
var Header=require('./Header');
var Footer=require('./Footer');


var Main=React.createClass({

	
	render:function(){
		return (<div>
					<Header/>
					
					<RouteHandler/>
					
					
				</div>);
	}
});

module.exports=Main;

