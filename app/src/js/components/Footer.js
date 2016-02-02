var React=require('react');
var mui=require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();

var Footer=React.createClass({
	childContextTypes: {
   		muiTheme: React.PropTypes.object
  	},

  	getChildContext() {
	    return {
	      muiTheme: ThemeManager.getCurrentTheme()
	    };
  	},
	render:function(){
		var styles={'background-color':'rgb(33,33,33)','height':'5em','margin-top':'0.5em'};
		var textContent={'padding':'2em','text-align':'center','color':'rgba(255, 255, 255, 0.54)'};
		var dt=new Date();
		var year=dt.getFullYear();
		return (<footer><div style={styles}><div style={textContent}>Copy rights @ {year} TrackMe</div></div></footer>);
	}
});

module.exports=Footer;
