var React=require('react');
var Router=require('react-router');
var DefaultRoute=Router.DefaultRoute;
var Route=Router.Route;

var Main=require('../Components/Main');
var UsersList=require('../Components/UsersList');
var Home=require('../Components/Home');
var DeviceList=require('../Components/DeviceList');
var AddUserForm=require('../Components/AddUserForm');
var DeviceEntryForm=require('../Components/DeviceEntryForm');
var AddTeam=require('../Components/AddTeam');
var DetailsEntryForm=require('../Components/DetailsEntryForm');

module.exports=(
	<Route name="app" path="/" handler={Main}>
		<Route name="home" path="home" handler={Home}/>
		<Route name="deviceList" path="devices" handler={DeviceList}/>
		<Route name="usersList" path="users" handler={UsersList}/>
		<Route name="addUser" path="adduser" handler={AddUserForm}/>
		<Route name="addDevice" path="adddevice" handler={DeviceEntryForm}/>
		<Route name="addTeam" path="addTeam" handler={AddTeam}/>
		<Route name="entryDetails" path="entryDetails" handler={DetailsEntryForm}/>
		<DefaultRoute handler={Home}/>
	</Route>);