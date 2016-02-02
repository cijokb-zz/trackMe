var React=require('react'); 
var mui=require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();
var ListItem=mui.ListItem;

var User= React.createClass({ 
	childContextTypes: {
   	 muiTheme: React.PropTypes.object
 	 },

	 getChildContext() {
	    return {
	      muiTheme: ThemeManager.getCurrentTheme()
	    };
	  },
	render:function(){ 
		return (
				<ListItem>
					<h5>{this.props.userName}</h5>
					<h5>{this.props.teamId}</h5>
				</ListItem> 
			); 
		}
	 });
module.exports=User;