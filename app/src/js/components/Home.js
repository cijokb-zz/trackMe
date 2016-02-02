var React=require('react');
var mui=require('material-ui');
var FireBase=require('firebase');
var ThemeManager = new mui.Styles.ThemeManager();
var List=mui.List;
var ListItem=mui.ListItem;
var Avatar=mui.Avatar;
var ListDivider=mui.ListDivider;
var IconButton=mui.IconButton;
var Styles=mui.Styles;
var Colors=Styles.Colors;
var Home= React.createClass({ 
	childContextTypes: {
   		muiTheme: React.PropTypes.object
  	},

  	getChildContext() {
	    return {
	      muiTheme: ThemeManager.getCurrentTheme()
	    };
  	},
  	loadData:function(){
			console.log("fetching data from transaction table");
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

  		return { details:[]}


  	},

	render:function(){ 
		return (
					<List>
						<ListItem
					          leftAvatar={<Avatar src="dist/css/images/cellphone-iphone.svg" />}
					          primaryText="Iphone5"
					          rightIconButton={<span className="badge-icon">6/10</span>}
					          />
					        <ListDivider inset={true} />
					        <ListItem
					          leftAvatar={<Avatar src="dist/css/images/cellphone-android.svg" />}
					          primaryText="Nexus5"
					          secondaryText={
					            <p>
					              <span style={{color: Colors.darkBlack}}>Summer BBQ</span><br/>
					              Wish I could come, but I&apos;m out of town this weekend.
					            </p>
					          }
					          secondaryTextLines={2} />
					        <ListDivider inset={true} />
				</List>); 
	} 
}); 
module.exports=Home;