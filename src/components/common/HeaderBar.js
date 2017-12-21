//import Header from './Header';
//import HamburgerDrawer from './HamburgerDrawer';
import React, {Component} from 'react';
import AppMenu from '../../containers/AppMenu';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Avatar from './Avatar';
import './HeaderBar.css';

class HeaderBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.handleDrawer = this.handleDrawer.bind(this);
        this.signOut = this.signOut.bind(this);
    }
    handleDrawer() {
        this.setState({open: !this.state.open});
    }

    signOut() {
        this.handleDrawer();
        this.props.signOut();
    }
    componentWillReceiveProps(props) {
        console.log(props);
    }
    render () {
        const props = this.props;
        const userInfo = props.userInfo;
        return (
            <div>
                <AppBar
                    title="TrackMe"
                    style={{backgroundColor: '#3F51B5', textAlign: 'center'}}
                    iconElementRight={<AppMenu/>}
                    onLeftIconButtonTouchTap={this.handleDrawer}
                    showMenuIconButton={!!props.isLogged}
                />
                {props.isLogged
                    ? <Drawer
                        docked={false}
                        width={200}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}
                        swipeAreaWidth={null}
                    >
                        <Avatar displayName={userInfo.displayName || undefined} email={userInfo.email || undefined}
                            photoURL={props.photoURL || undefined}/>
                        <MenuItem onClick={this.handleDrawer}>Menu Item</MenuItem>
                        <MenuItem onClick={this.signOut}>Sign Out</MenuItem>
                    </Drawer> : null}
            </div>);
    };
}

export default HeaderBar;

