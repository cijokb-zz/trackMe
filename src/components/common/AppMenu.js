import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import './AppMenu.css';
const AppMenu = (props) => (
    <div>
        <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            iconStyle={{color: 'rgb(255, 255,255)'}}
        >
            <MenuItem primaryText="Add Team" onClick={() => props.menuItemClick('addTeam')}/>
            <MenuItem primaryText="Add Device" onClick={() => props.menuItemClick('addDevice')}/>
            <MenuItem primaryText="Settings"/>
            <MenuItem primaryText="Help" />
        </IconMenu>
    </div>
);

export default AppMenu;
