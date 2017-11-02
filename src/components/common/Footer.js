import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;
const style = {bottom: 0, position: 'fixed'};

const Footer = () => (
    <Paper zDepth={1} style={style}>
        <BottomNavigation selectedIndex={0}>
            <BottomNavigationItem
                label="Recents"
                icon={recentsIcon}
                onClick={() => window.alert('todo')}
            />
            <BottomNavigationItem
                label="Favorites"
                icon={favoritesIcon}
                onClick={() => window.alert('todo')}
            />
            <BottomNavigationItem
                label="Nearby"
                icon={nearbyIcon}
                onClick={() => window.alert('todo')}
            />
        </BottomNavigation>
    </Paper>
);

export default Footer;
