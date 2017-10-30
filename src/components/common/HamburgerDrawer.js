import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const HamburgerDrawer = () => (
    <Drawer
        docked={false}
        width={200}
        open={false}
        onRequestChange={(open) => this.setState({open})}
    >
        <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
        <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
    </Drawer>
);

export default HamburgerDrawer;
