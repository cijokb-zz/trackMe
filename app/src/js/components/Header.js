var React=require('react');
var Router=require('react-router');
injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
var mui=require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();
var AppBar=mui.AppBar;
var LeftNav=mui.LeftNav;
var MenuItem=mui.MenuItem;
var Styles=mui.Styles;
var Colors=Styles.Colors;
var Spacing=Styles.Spacing;
var Typography=Styles.Typography;

var Header=React.createClass({
	mixins:[Router.Navigation],

	childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  showLeftNav:function(){
  	this.refs.leftNav.toggle();
  },
  selectMenu:function(e,key,payload){
  	console.log("hello");
  	console.log(payload);
  	this.transitionTo(payload.route);

  },
  render:function(){
		var styles={
				   cursor: 'pointer',
			      //.mui-font-style-headline
			      fontSize: '24px',
			      color: Typography.textFullWhite,
			      lineHeight: Spacing.desktopKeylineIncrement + 'px',
			      fontWeight: Typography.fontWeightLight,
			      backgroundColor: Colors.cyan500,
			      paddingLeft: Spacing.desktopGutter,
			      paddingTop: '0px',
			      marginBottom: '8px'
			  };
	var header = (<div style={styles}>
	     			 Settings
     			 </div>
   	 );
		menuItems = [
					  { route: 'home', text: 'Home' },		
					  { route: 'entryDetails', text: 'New Entry' },	
					  { route: 'addUser', text: 'Add User' },
					  { route: 'addDevice', text: 'Add Device' },
					  { route: 'addTeam', text: 'Add Team' },
					  { route: 'about', text: 'About' },
					  { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
					  { 
					     type: MenuItem.Types.LINK, 
					     payload: 'https://github.com/callemall/material-ui', 
					     text: 'GitHub' 
					  },
					  { 
					     text: 'Disabled', 
					     disabled: true 
					  },
					  { 
					     type: MenuItem.Types.LINK, 
					     payload: 'https://www.google.com', 
					     text: 'Disabled Link', 
					     disabled: true 
					  },
					];
		
		return (
					<AppBar  title="TrackME" iconClassNameRight="muidocs-icon-navigation-expand-more" onLeftIconButtonTouchTap={this.showLeftNav}>
					<LeftNav ref="leftNav" docked={false} header={header} menuItems={menuItems} onChange={this.selectMenu}/>
					</AppBar>
			)
	}


});

module.exports=Header;