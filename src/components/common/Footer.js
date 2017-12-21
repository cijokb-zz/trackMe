import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;
const style = {bottom: 0, position: 'fixed', display: 'block', width: '100%'};

const Footer = ({isLogged}) => (
    isLogged
        ? <div style={style}>
            <Paper zDepth={1}>
                <BottomNavigation selectedIndex={0}>
                    <BottomNavigationItem
                        label="Recents"
                        icon={recentsIcon}
                        onClick={() => console.log('todo')}
                    />
                    <BottomNavigationItem
                        label="Favorites"
                        icon={favoritesIcon}
                        onClick={() => console.log('todo')}
                    />
                    <BottomNavigationItem
                        label="Nearby"
                        icon={nearbyIcon}
                        onClick={() => console.log('todo')}
                    />
                </BottomNavigation>
            </Paper>
        </div> : null
);

export default Footer;
