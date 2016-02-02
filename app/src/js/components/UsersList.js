var React=require('react'); 
var User=require('./User');
var mui=require('material-ui');
var FireBase=require('firebase');
var ThemeManager = new mui.Styles.ThemeManager();
var List=mui.List;

var UsersList= React.createClass({ 

	childContextTypes: {
    	muiTheme: React.PropTypes.object
  	},

  	getChildContext() {
    	return {
      	muiTheme: ThemeManager.getCurrentTheme()
    	};
  	},
	loadData:function(){
			console.log("users list data Loaded");
			var ref=new FireBase('https://reacttrackme.firebaseio.com/users');
			ref.on('value',function (snap) {
				var users=[];
					snap.forEach(function(itemSnap){
					var user=itemSnap.val();
					user.key=itemSnap.key();
					users.push(user);
					
				});
				this.setState({
					users:users	

				});	
			}.bind(this));
	},
	componentDidMount:function(){
		console.log("Device List mounted");
		this.loadData();

	},

	getInitialState:function(){
		return {

			users:[]
			
		}	
	},

	render:function(){
		var user=this.state.users.map(function(user){
			return <User userId={user.userId} userName={user.userName} teamId={user.teamId} />		
		});

		return (	
					<List>
						{user}
					</List>
			)
		}
	 });
module.exports=UsersList;