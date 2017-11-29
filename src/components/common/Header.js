import AppBar from 'material-ui/AppBar';
import React from 'react';
import AppMenu from './AppMenu';

const Header = () => (
    <AppBar
        title="TrackMe"
        style={{backgroundColor: '#3F51B5',textAlign:'center'}}
        iconElementRight={<AppMenu/>}
        //onLeftIconButtonTouchTap={}
    />
);

export default Header;
