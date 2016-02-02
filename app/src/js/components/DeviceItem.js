var React=require('react');
var mui=require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();
var ListItem=mui.ListItem;

var DeviceItem=React.createClass({
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
				<div>
					<ListItem>
        
					<h4>{this.props.name}</h4>
					<h6> {this.props.pheripherals}</h6>
		    		</ListItem>		
			    </div>  
 		 )
	}
});
module.exports=DeviceItem;
