import AppBar from 'material-ui/AppBar';
import React from 'react';
import AppMenu from './AppMenu';
const HeaderBar = () => (
    <AppBar
        title="TrackMe"
        style={{backgroundColor: '#3F51B5'}}
        iconElementRight={<AppMenu/>}
    />
);

export default HeaderBar;
