import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

// const HamburgerDrawer = () => (
//     <Drawer
//         docked={false}
//         width={200}
//         open={false}
//         onRequestChange={(open) => this.setState({open})}
//     >
//         <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
//         <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
//     </Drawer>
// );

class HamburgerDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {open: true};
    }

    componentWillReceiveProps(newProps) {
        this.setState({open: newProps.open});
    }
    render() {
        return (
            <Drawer
                docked={false}
                width={200}
                open={this.state.open}
                onRequestChange={(open) => this.setState({open})}
                swipeAreaWidth={null}
            >
                <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
                <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
            </Drawer>
        );
    }
}

export default HamburgerDrawer;
